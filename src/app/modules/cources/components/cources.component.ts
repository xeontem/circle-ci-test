import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { cond, condL, I, getInt, getFraction, toHalfHour } from '../../../tools/lambda';

//components
import { AddCourceDialogComponent } from './add-cource-dialog.component';
import { ConfirmDeletingComponent } from './confirm-deleting.component';
//services
import { ProvideCourcesService } from '../services/provide-cources.service';
//decorators
import { logParam } from '../../../tools/parameter.decorators';
import 'rxjs/add/operator/reduce';
export interface Cource {
  id: string;
  title: string;
  duration: string;
  date: Date;
  description: string;
  created: Date;
  topRated?: boolean;
}

@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourcesComponent implements OnInit {
  cources:                 Observable<Cource[]>;
  searchCourceForm:        FormGroup;
  hint:                    string = 'title of cource';
  searchCourceStream$:     Subscription;

  constructor(
    private csprovider: ProvideCourcesService,
    private fb:         FormBuilder,
    private cd:         ChangeDetectorRef,
    private dialog:     MatDialog) { }

  ngOnInit() {
    // recieve collection from firestore
    this.cources = this.csprovider.cources;
    // this.cources = Observable.of([{
    //   id: 'mockID',
    //   title: 'mocked cource',
    //   duration: '',
    //   date: new Date,
    //   description: '',
    //   created: new Date
    // }]);


    // search cource form
    this.searchCourceForm = this.fb.group({
      predicate: ['', Validators.required]
    });
  }

  searchCource(@logParam val: string): void {
    console.log(val);
    this.searchCourceStream$ = this.cources
      .do(val => console.log(val))
      .subscribe(x => this.cd.markForCheck())
      // .switchMap(cources => Observable.from(cources))
      // .filter(cource => cource.title.toLocaleLowerCase().includes(val.toLowerCase()))
      // .do(cource => console.log('after: ', cource))
      // .reduce((acc, cource, ind) => acc.concat([cource]), [])// flatMap(cource => Observable.(cource))

    // this.cources = cond(val)
    //   (this.csprovider.getListByQuery('title', '==', val))
    //   (this.csprovider.getList()).valueChanges();
  }

  restoreCources() {
    this.csprovider.restore().subscribe(res => console.log(res));
  }

  openAddCourceDialog(@logParam val: string) {
    const dialogRef = this.dialog.open(AddCourceDialogComponent, {
      // panelClass: 'add-cource-dialog'
      width: '35vw'
    });

    dialogRef.afterClosed().subscribe((newCource: Cource) => {
      if (newCource) {
          newCource.id = `cource#${this.csprovider.courcesCount}`;
          newCource.created = new Date;
          this.csprovider.addCource(newCource);
      } else {
        // User clicked 'Cancel' or clicked outside the dialog
      }
    });
  }

  deletedEventHandler(cource: Cource): void {
    const dialogRef = this.dialog.open(ConfirmDeletingComponent);
    dialogRef.afterClosed().subscribe((del: boolean) =>
      condL(del)(x => this.csprovider.removeItem(cource))(I));
  }

  editedEventHandler(updatedCource: Cource): void {
    this.csprovider.updateCource(updatedCource);
  }
}
