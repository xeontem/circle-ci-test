import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as courcesActions from '../actions/cources.action';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Observable } from 'rxjs';
import { ProvideCourcesService } from '../services/provide-cources.service';

export interface Cource {
  id: string;
  title: string;
  duration: string;
  date: Date;
  description: string;
  created: Date;
  topRated: boolean;
}
export interface CourcesState extends EntityState<Cource> {
  array: Cource[];
  filtered: Cource[];
  predicate: string;
  //  entities: Array<Cource>
  //  ids: Array<string>
}

export const CourcesAdapter: EntityAdapter<Cource> = createEntityAdapter<Cource>({
  // selectId: (book: Book) => book.id,
  sortComparer: false,
});

const initialState: CourcesState = CourcesAdapter.getInitialState({
  array: [],
  filtered: [],
  predicate: '',
  //  entities: Array<Cource>
  //  ids: Array<string>
});

export function CourcesReducer(state: CourcesState = initialState, action: courcesActions.Actions): CourcesState {
  switch (action.type) {
    case courcesActions.SET_COURCES: return {
      ...CourcesAdapter.addMany(action.payload, state),
      array: action.payload,
      filtered: action.payload.filter(cource => cource.title.toLowerCase().includes(state.predicate.toLowerCase()))
    };
    case courcesActions.FILTER_COURCES: return {
      ...state,
      filtered: action.payload,
    };
    case courcesActions.SET_PRED: return {
      ...state,
      predicate: action.payload,
      filtered: state.array.filter(cource => cource.title.toLowerCase().includes(action.payload.toLowerCase()))
    };
    default: return state;
  }
}

export const getFiltered = (state: CourcesState): Cource[] => state.filtered;
export const getPredicate = (state: CourcesState): string => state.predicate;
