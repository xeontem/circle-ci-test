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
import { FilterCources, SetCources, SetPredicate } from '../actions/cources.action';

//store
import { Store } from '@ngrx/store';
import { Cource, State } from '../reducers/cources.reducer';
import { Order } from '../reducers/orders.reducer';
import * as fromCources from '../reducers';
import { Dictionary } from '@ngrx/entity/src/models';
@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourcesComponent implements OnInit {
  cources$:        Observable<Cource[]>;
  orderKey:        Order;
  orders$:         Store<Dictionary<Order>>;
  predicate:       string;

  constructor(
    private csprovider: ProvideCourcesService,
    private     dialog: MatDialog,
    private     flpipe: FilterCourcesPipe,
    private      store: Store<fromCources.State>) { }

  ngOnInit() {
    this.orders$ = this.store.select(fromCources.ordersEntitiesSelector);
    this.orders$.subscribe(s => this.orderKey = s[0]);
    this.cources$ = this.store.select(fromCources.filteredSelector);
    this.store.select(fromCources.predicateSelector).subscribe(pred => this.predicate = pred);
  }

  searchCource(@logParam pred: string = ''): void {
    // this.store.dispatch(new FilterCources(this.flpipe.transform(this.store.select(fromCources.courcesSelector), pred)));
    this.store.dispatch(new SetPredicate(pred));
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
