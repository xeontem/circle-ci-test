import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromCources from './cources.reducer';
import * as fromOrders from './orders.reducer';
import * as fromRoot from '../../../store/';
import { MemoizedSelector } from '@ngrx/store/src/selector';
import { getValRight, B } from '../../../tools/lambda';
import { Observable } from 'rxjs';
export * from './orders.reducer';


interface CourcesState {
  cources: fromCources.State;
  orders: fromOrders.State;
}

export interface State extends fromRoot.State {
  'courcesModule': CourcesState;
}

export const reducers: ActionReducerMap<CourcesState> = {
  cources: fromCources.reducer,
  orders: fromOrders.reducer
};

//---------------------- courcesModule getter ------------------------------------------------
type GetCourcesModuleState = MemoizedSelector<State, CourcesState>;
const getCourcesModuleState: GetCourcesModuleState = createFeatureSelector<CourcesState>('courcesModule');


//---------------------- cources selectors ------------------------------------------------
const getCourcesState = createSelector(
  getCourcesModuleState,
  (state: CourcesState): fromCources.State => state.cources
);

const {
  // selectIds: getBookIds,
  selectEntities: getCourcesEntities,
  selectAll: getAllCources,
  // selectTotal: getTotalBooks,
} = fromCources.adapter.getSelectors(getCourcesState);

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


//---------------------- orders selectors ------------------------------------------------
const getOrdersState = createSelector(
  getCourcesModuleState,
  (state: CourcesState): fromOrders.State => state.orders
);

const {
  // selectIds: getBookIds,
  selectEntities: getordersEntities,
  selectAll: getAllOrders,
  // selectTotal: getTotalBooks,
} = fromOrders.adapter.getSelectors(getOrdersState);


export const ordersEntitiesSelector = createSelector(
  getordersEntities,
  entities => entities
);
