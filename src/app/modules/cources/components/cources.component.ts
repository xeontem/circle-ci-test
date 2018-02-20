import { If } from '../../../tools/lambda';
import { Store } from '@ngrx/store';
import { logParam } from '../../../tools/parameter.decorators';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Dictionary } from '@ngrx/entity/src/models';
import { SetPredicate } from '../actions/cources.action';
import { FilterCourcesPipe } from '../pipes/filter-cources.pipe';
import { ProvideCourcesService } from '../services/provide-cources.service';
import { AddCourceDialogComponent } from './add-cource-dialog.component';
import { ConfirmDeletingComponent } from './confirm-deleting.component';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Cource, Order, State, ordersEntitiesSelector, filteredSelector, predicateSelector } from '../reducers';

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
    private      store: Store<State>) { }

  ngOnInit() {
    this.orders$ = this.store.select(ordersEntitiesSelector);
    this.orders$.subscribe(s => this.orderKey = s[0]);
    this.cources$ = this.store.select(filteredSelector);
    this.store.select(predicateSelector).subscribe(pred => this.predicate = pred);
  }

  searchCource(@logParam pred: string = ''): void {
    // this.store.dispatch(new FilterCources(this.flpipe.transform(this.store.select(courcesSelector), pred)));
    this.store.dispatch(new SetPredicate(pred));
  }

  restoreCources() {
    this.csprovider.restore().subscribe(res => console.log(res));
  }

  openAddCourceDialog() {
    const addCource = this.csprovider.addCource;
    this.dialog
        .open(AddCourceDialogComponent, { width: '35vw' })
        .afterClosed()
        .subscribe((newCource: Cource) =>
          If(newCource)(this.csprovider.addCource(newCource)));
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
