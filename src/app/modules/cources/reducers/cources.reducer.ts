import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as courcesActions from '../actions/cources.action';
// import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Observable } from 'rxjs';
import { ProvideCourcesService } from '../services/provide-cources.service';



// const afs = new AngularFirestore();


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
// export interface CourcesState {
//   cources: Observable<Cource[]>;
//   // orders: Order[];
// }

/**
 * @ngrx/entity provides a predefined interface for handling
 * a structured dictionary of records. This interface
 * includes an array of ids, and a dictionary of the provided
 * model type by id. This interface is extended to include
 * any additional interface properties.
 */
export interface State extends EntityState<Cource> {
  // cources: string;
}
/**
 * createEntityAdapter creates many an object of helper
 * functions for single or multiple operations
 * against the dictionary of records. The configuration
 * object takes a record id selector function and
 * a sortComparer option which is set to a compare
 * function if the records are to be sorted.
 */
export const adapter: EntityAdapter<Cource> = createEntityAdapter<Cource>({
  // selectId: (book: Book) => book.id,
  sortComparer: false,
});

/**
 * getInitialState returns the default initial state
 * for the generated entity state. Initial state
 * additional properties can also be defined.
 */
export const initialState: State = adapter.getInitialState({
  // cources: 'first',
  // cources: Observable.of([]),
  // orders: ['id', 'title', 'duration', 'date', 'description', 'created', 'topRated']
});


export function courcesReducer(state: State = initialState, action: courcesActions.Actions): State {
  switch (action.type) {
    case   courcesActions.SET_COURCES: return {
      /**
       * The addOne function provided by the created adapter
       * adds one record to the entity dictionary
       * and returns a new state including that records if it doesn't
       * exist already. If the collection is to be sorted, the adapter will
       * insert the new record into the sorted array.
       */
      ...adapter.addMany(action.payload, state),
      // cources: state.cources,
    };
    // case courcesActions.SEARCH_COURCE: return Object.assign(state, {cources: action.payload});
    default: return state;
  }
}

// const initialState: CourcesState = {
// };

// const courcesService = new ProvideCourcesService()
// export function courcesReducer(state = initialState, action: courcesActions.Actions): CourcesState {
//   switch (action.type) {
//     case   courcesActions.SET_COURCES: return Object.assign({}, state, {cources: action.payload});
//     // case courcesActions.SEARCH_COURCE: return Object.assign(state, {cources: action.payload});
//     default:                           return state;
//   }
// }

// export const getSelectedId = (state: State) => state.selectedCourceId;
