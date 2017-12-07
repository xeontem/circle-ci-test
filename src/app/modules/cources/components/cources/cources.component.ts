import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { cond, getInt, getFraction, toHalfHour } from '../../../../shared/lambda';

//components
import { AddCourceDialogComponent } from '../add-cource-dialog/add-cource-dialog.component';
//services
import { ProvideEventsService } from '../../services/provide-events.service';

//decorators
import { logParam } from '../../../../shared/parameter.decorators';
export interface Cource {
  id: string;
  title: string;
  duration: string;
  date: Date;
  description: string;
}
@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourcesComponent implements OnInit {
  // courcesCollection: AngularFirestoreCollection<Cource>;
  cources:           Observable<{}[]>;
  searchCourceForm:  FormGroup;
  hint:              string = 'title of cource';
  // currentDialog: MatDialogRef<AddCourceDialogComponent>;
  constructor(
    private csprovider: ProvideEventsService,
    private fb:  FormBuilder,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    // recieve collection from firestore
    // this.courcesCollection = this.afs.collection('cources');
    this.cources = this.csprovider.getList().valueChanges();

    // search cource form
    this.searchCourceForm = this.fb.group({
      predicate: ['', Validators.required]
    });
  }

  searchCource(@logParam val: string): void {
    this.cources = cond(val)
      (this.csprovider.getListByQuery('title', '==', val))
      (this.csprovider.getList()).valueChanges();
  }

  openDialog(@logParam val: string) {
    const dialogRef = this.dialog.open(AddCourceDialogComponent, {
      // panelClass: 'add-cource-dialog'
      width: '35vw'
    });

    dialogRef.afterClosed().subscribe((newCource: Cource) => {
      // console.log('Dialog result: ', newCource);
      if (newCource) {
        newCource.duration = `${getInt(newCource.duration)}h ${toHalfHour(getFraction(newCource.duration))}min`;
        this.csprovider.addCource(newCource);
        // this.selectedEmoji = result;
      } else {
        // User clicked 'Cancel' or clicked outside the dialog
      }
    });
  }

  deletedEventHandler(cource: Cource): void {
    console.log(cource.id);
  }

  editedEventHandler(cource: Cource): void {
    console.log(cource);
  }

}
