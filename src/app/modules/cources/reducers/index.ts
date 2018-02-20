import { Observable } from 'rxjs/Observable';
import { getValRight, B } from '../../../tools/lambda';
import { ActionReducerMap, createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import * as fromCources from './cources.reducer';
import * as fromOrders from './orders.reducer';
import * as fromRoot from '../../../store/';
export * from './orders.reducer';
export * from './cources.reducer';


interface CourcesModuleState {
  cources: fromCources.CourcesState;
  orders: fromOrders.OrdersState;
}

export interface State extends fromRoot.State {
  'courcesModule': CourcesModuleState;
}

export const reducers: ActionReducerMap<CourcesModuleState> = {
  cources: fromCources.CourcesReducer,
  orders: fromOrders.OrdersReducer
};

// ---------------------- courcesModule getter ------------------------------------------------
type GetCourcesModuleState = MemoizedSelector<State, CourcesModuleState>;
const getCourcesModuleState: GetCourcesModuleState = createFeatureSelector<CourcesModuleState>('courcesModule');


// ---------------------- cources selectors ------------------------------------------------
const getCourcesState = createSelector(
  getCourcesModuleState,
  (state: CourcesModuleState): fromCources.CourcesState => state.cources
);

const {
  // selectIds: getBookIds,
  selectEntities: getCourcesEntities,
  selectAll: getAllCources,
  // selectTotal: getTotalBooks,
} = fromCources.CourcesAdapter.getSelectors(getCourcesState);

export const courcesSelector = createSelector(
  getAllCources,
  entities => entities
);

export const filteredSelector = createSelector(
  getCourcesState,
  fromCources.getFiltered
);

export const predicateSelector = createSelector(
  getCourcesState,
  fromCources.getPredicate
);


// ---------------------- orders selectors ------------------------------------------------
const getOrdersState = createSelector(
  getCourcesModuleState,
  (state: CourcesModuleState): fromOrders.OrdersState => state.orders
);

const {
  // selectIds: getBookIds,
  selectEntities: getordersEntities,
  selectAll: getAllOrders,
  // selectTotal: getTotalBooks,
} = fromOrders.OrdersAdapter.getSelectors(getOrdersState);


export const ordersEntitiesSelector = createSelector(
  getordersEntities,
  entities => entities
);
