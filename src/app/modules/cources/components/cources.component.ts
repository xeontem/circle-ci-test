import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { condL, I } from '../../../tools/lambda';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//components
import { AddCourceDialogComponent } from './add-cource-dialog.component';
import { ConfirmDeletingComponent } from './confirm-deleting.component';
//services
import { ProvideCourcesService } from '../services/provide-cources.service';
//decorators
import { logParam } from '../../../tools/parameter.decorators';
//pipes
import { FilterCourcesPipe } from '../pipes/filter-cources.pipe';
export interface Cource {
  id: string;
  title: string;
  duration: string;
  date: Date;
  description: string;
  created: Date;
  topRated: boolean;
}
export type Order = 'id' | 'title' | 'duration' | 'date' | 'description' | 'created' | 'topRated'
@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourcesComponent implements OnInit {
  orders: Order[] = ['id', 'title', 'duration', 'date', 'description', 'created', 'topRated'];
  orderKey: Order = this.orders[0];
  searchPredicate: string = '';

  constructor(
    private csprovider: ProvideCourcesService,
    private dialog:     MatDialog,
    private flpipe:     FilterCourcesPipe) { }

  ngOnInit() { }

  searchCource(@logParam val: string): void {
    ProvideCourcesService.cources = this.flpipe.transform(this.csprovider.getList().valueChanges(), val)
  }

  restoreCources() {
    this.csprovider.restore().subscribe(res => console.log(res));
  }

  openAddCourceDialog() {
      this.dialog
        .open(AddCourceDialogComponent, { width: '35vw' })
        .afterClosed()
        .subscribe((newCource: Cource) =>
          newCource && this.csprovider.addCource(newCource));
  }

  deletedEventHandler(id: string): void {
    this.dialog
      .open(ConfirmDeletingComponent)
      .afterClosed()
      .subscribe((del: boolean) =>
        del && this.csprovider.removeItem(id));
  }

  editedEventHandler(updatedCource: Cource): void {
    this.csprovider.updateCource(updatedCource);
  }
}
