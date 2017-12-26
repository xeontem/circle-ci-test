import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as courcesActions from '../actions/cources.action';
import { getValRight } from '../../../tools/lambda';
import { Observable } from 'rxjs';
import { ProvideCourcesService } from '../services/provide-cources.service';
import { MemoizedSelector } from '@ngrx/store/src/selector';


// const filterPipe = new FilterCourcesPipe;

export type Order = 'id' | 'title' | 'duration' | 'date' | 'description' | 'created' | 'topRated'
export interface Cource {
  id: string;
  title: string;
  duration: string;
  date: Date;
  description: string;
  created: Date;
  topRated: boolean;
}

export interface CourcesState {
  cources: Observable<Cource[]> | null;
  orders: Order[];
}

const initialState: CourcesState = {
  cources: null,
  orders: ['id', 'title', 'duration', 'date', 'description', 'created', 'topRated']
};

// const courcesService = new ProvideCourcesService()
export function courcesReducer(state = initialState, action: courcesActions.Actions): CourcesState {
  switch (action.type) {
    case   courcesActions.SET_COURCES: return Object.assign({}, state, {cources: action.payload});
    // case courcesActions.SEARCH_COURCE: return Object.assign(state, {cources: action.payload});
    default:                           return state;
  }
}

//---------------------- AppState getters ------------------------------------------------
type GetCourcesState = MemoizedSelector<Object, CourcesState>;
const getCourcesState: GetCourcesState = createFeatureSelector<CourcesState>('courcesReducer');

//----------------------------------- main component selector ----------------------------
export type CourceSelector = MemoizedSelector<CourcesState, Observable<Cource[]> | null>;
export type OrdersSelector = MemoizedSelector<CourcesState, Order[]>;

export const courcesSelector: CourceSelector = createSelector(getCourcesState, getValRight('cources'));
export const ordersSelector: OrdersSelector = createSelector(getCourcesState, getValRight('orders'));
