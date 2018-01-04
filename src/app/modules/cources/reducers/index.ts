import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromCources from './cources.reducer';
import * as fromRoot from '../../../store/';
import { MemoizedSelector } from '@ngrx/store/src/selector';
import { getValRight, B } from '../../../tools/lambda';
import { Observable } from 'rxjs';

export type Order = 'id' | 'title' | 'duration' | 'date' | 'description' | 'created' | 'topRated'

export interface CourcesState {
  cources: fromCources.State;
}

export interface State extends fromRoot.State {
  'courcesModule': CourcesState;
}

export const reducers: ActionReducerMap<CourcesState> = {
  cources: fromCources.courcesReducer,
};

// const getCourcesState = (state: CourcesState): fromCources.State => state.cources;
/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `books` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<State>) {
 * 	  this.booksState$ = state$.select(getBooksState);
 * 	}
 * }
 * ```
 */

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
*/
// export const getBooksState = createFeatureSelector<BooksState>('books');
//---------------------- AppState getters ------------------------------------------------
type GetCourcesModuleState = MemoizedSelector<State, CourcesState>;
const getCourcesModuleState: GetCourcesModuleState = createFeatureSelector<CourcesState>('courcesModule');
/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them usable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function creates very efficient selectors that are memoized and
 * only recompute when arguments change. The created selectors can also be composed
 * together to select different pieces of state.
 */
// export const getBookEntitiesState = createSelector(
//   getCourcesState,
//   state => state.books
// );

// export const getSelectedBookId = createSelector(
//   getBookEntitiesState,
//   fromBooks.getSelectedId
// );
export const getCourcesState = createSelector(
  getCourcesModuleState,
  (state: CourcesState): fromCources.State => state.cources
);

/**
 * Adapters created with @ngrx/entity generate
 * commonly used selector functions including
 * getting all ids in the record set, a dictionary
 * of the records by id, an array of records and
 * the total number of records. This reducers boilerplate
 * in selecting records from the entity state.
 */
export const {
  // selectIds: getBookIds,
  selectEntities: getCourcesEntities,
  selectAll: getAllCources,
  // selectTotal: getTotalBooks,
} = fromCources.adapter.getSelectors(getCourcesState);

//----------------------------------- main component selector ----------------------------
// export type CourceSelector = MemoizedSelector<CourcesState, Observable<fromCources.Cource[]> | null>;
// export type OrdersSelector = MemoizedSelector<CourcesState, fromCources.Order[]>;

export const courcesSelector = createSelector(
  getAllCources,
  entities => entities
);

// export const getCourcesEntities =
// export const ordersSelector = createSelector(
//   o => {
//     // console.dir(o)
//     const l = getCourcesState(o);
//     console.dir(l)

//     return l},
//   o => {
//     console.dir(o)

//     return getValRight('cources')(o)},
//   getValRight('orders')
// );
// export const ordersSelector = createSelector(
//   x => (console.dir(x), x['courcesModule']),
//   x => (console.dir(x), x['cources']),
//   x => (console.dir(x), x),
//   // x => x['orders'],
// );

/**
 * Adapters created with @ngrx/entity generate
 * commonly used selector functions including
 * getting all ids in the record set, a dictionary
 * of the records by id, an array of records and
 * the total number of records. This reducers boilerplate
 * in selecting records from the entity state.
 */
// export const {
//   selectIds: getBookIds,
//   selectEntities: getBookEntities,
//   selectAll: getAllBooks,
//   selectTotal: getTotalBooks,
// } = fromBooks.adapter.getSelectors(getBookEntitiesState);

// export const getSelectedBook = createSelector(
//   getBookEntities,
//   getSelectedBookId,
//   (entities, selectedId) => {
//     return selectedId && entities[selectedId];
//   }
// );

/**
 * Just like with the books selectors, we also have to compose the search
 * reducer's and collection reducer's selectors.
 */
// export const getSearchState = createSelector(
//   getBooksState,
//   (state: BooksState) => state.search
// );

// export const getSearchBookIds = createSelector(
//   getSearchState,
//   fromSearch.getIds
// );
// export const getSearchQuery = createSelector(
//   getSearchState,
//   fromSearch.getQuery
// );
// export const getSearchLoading = createSelector(
//   getSearchState,
//   fromSearch.getLoading
// );
// export const getSearchError = createSelector(
//   getSearchState,
//   fromSearch.getError
// );

/**
 * Some selector functions create joins across parts of state. This selector
 * composes the search result IDs to return an array of books in the store.
 */
// export const getSearchResults = createSelector(
//   getBookEntities,
//   getSearchBookIds,
//   (books, searchIds) => {
//     return searchIds.map(id => books[id]);
//   }
// );

// export const getCollectionState = createSelector(
//   getBooksState,
//   (state: BooksState) => state.collection
// );

// export const getCollectionLoaded = createSelector(
//   getCollectionState,
//   fromCollection.getLoaded
// );
// export const getCollectionLoading = createSelector(
//   getCollectionState,
//   fromCollection.getLoading
// );
// export const getCollectionBookIds = createSelector(
//   getCollectionState,
//   fromCollection.getIds
// );

// export const getBookCollection = createSelector(
//   getBookEntities,
//   getCollectionBookIds,
//   (entities, ids) => {
//     return ids.map(id => entities[id]);
//   }
// );

// export const isSelectedBookInCollection = createSelector(
//   getCollectionBookIds,
//   getSelectedBookId,
//   (ids, selected) => {
//     return ids.indexOf(selected) > -1;
//   }
// );
