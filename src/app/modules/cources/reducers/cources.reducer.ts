import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as courcesActions from '../actions/cources.action';
import { flipGetVal } from '../../../tools/lambda';
import { Observable } from 'rxjs';
import { ProvideCourcesService } from '../services/provide-cources.service';

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
    case courcesActions.SET_COURCES: return Object.assign(state, {cources: action.payload});
    default:                         return state;
  }
}

//---------------------- AppState getters ------------------------------------------------
const getCourcesState = createFeatureSelector<CourcesState>('courcesReducer');

//----------------------------------- main component selector ----------------------------
export const courcesSelector = createSelector(getCourcesState, flipGetVal('cources'));
export const ordersSelector = createSelector(getCourcesState, flipGetVal('orders'));
