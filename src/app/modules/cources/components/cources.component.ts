import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { condL, I } from '../../../tools/lambda';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
//components
import { AddCourceDialogComponent } from './add-cource-dialog.component';
import { ConfirmDeletingComponent } from './confirm-deleting.component';
//services
import { ProvideCourcesService } from '../services/provide-cources.service';
//decorators
import { logParam } from '../../../tools/parameter.decorators';
//pipes
import { FilterCourcesPipe } from '../pipes/filter-cources.pipe';
// actions
import { SearchCource, SetCources } from '../actions/cources.action';

import { Store } from '@ngrx/store';
import { Cource } from '../reducers/cources.reducer';
import * as fromCources from '../reducers';
import { getCourcesState } from '../reducers';
@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourcesComponent implements OnInit {
  cources$:  Observable<Cource[]>;
  orderKey: fromCources.Order;
  orders: fromCources.Order[];
  searchPredicate: string;
  // courcesSelector: CourceSelector;
  // ordersSelector: OrdersSelector;
  // courcesLoaded: boolean = false;

  constructor(
    private csprovider: ProvideCourcesService,
    private     dialog: MatDialog,
    private     flpipe: FilterCourcesPipe,
    private      store: Store<fromCources.State>) { }

  ngOnInit() {
    // this.courcesSelector = courcesSelector;
    // this.orders = this.store.select(ordersSelector).do(orders => console.dir(orders));
    this.orders = ['id', 'title', 'duration', 'date', 'description', 'created', 'topRated']
    this.cources$ = this.store.select(fromCources.courcesSelector);
    this.cources$.subscribe(s => console.dir(s))
    // this.cources$.subscribe(x => {
    //   console.dir(x)

    // })
    // console.dir(this.cources)

      // .switchMap(store => store.cources);

    // this.cources.subscribe(cources => {
    //   this.courcesLoaded = true;
    // })
    this.orderKey = 'id';//this.store.select(ordersSelector)[0];
    this.searchPredicate = '';
  }

  searchCource(@logParam val: string): void {
    // this.store.dispatch(new SearchCource(this.csprovider.getList().valueChanges(), val));
    // this.store.select(fromCources.courcesSelector).subscribe(cources => {
    //   this.store.dispatch(new SetCources(this.flpipe.transform(cources, val)));
    // })
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
