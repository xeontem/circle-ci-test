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
export interface State extends EntityState<Cource> {
  array: Cource[];
  filtered: Cource[];
  predicate: string;
  //  entities: Array<Cource>
  //  ids: Array<string>
}

export const adapter: EntityAdapter<Cource> = createEntityAdapter<Cource>({
  // selectId: (book: Book) => book.id,
  sortComparer: false,
});

const initialState: State = adapter.getInitialState({
  array: [],
  filtered: [],
  predicate: '',
  //  entities: Array<Cource>
  //  ids: Array<string>
});

export function reducer(state: State = initialState, action: courcesActions.Actions): State {
  switch (action.type) {
    case courcesActions.SET_COURCES: return {
      ...adapter.addMany(action.payload, state),
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

export const getFiltered = (state: State): Cource[] => state.filtered;
export const getPredicate = (state: State): string => state.predicate;
