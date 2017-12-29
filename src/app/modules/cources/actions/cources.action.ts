import { Action } from '@ngrx/store';
import { Cource } from '../reducers/cources.reducer';
import { Observable } from 'rxjs';

export const SET_COURCES = '[Cources] set_cources';
export const SEARCH_COURCE = '[Cources] search_cource';

export class SetCources implements Action {
  readonly type = SET_COURCES;
  constructor(readonly payload: Cource[]) { }
}

export class SearchCource implements Action {
  readonly type = SEARCH_COURCE;
  readonly payload: {
    cources: Observable<Cource[]>,
    val: string;
  }
  constructor(
    cources: Observable<Cource[]>,
    val: string ) {
      this.payload = { cources, val }
     }
}
// export class SelectEvent implements Action {
//   readonly payload: any;
//   readonly type = SELECT_EVENT;
//   constructor(payload?: any) {
//     this.payload = payload;
//   }
// }

// export class StorePerf implements Action {
//   readonly type = STORE_PREFWITH;
//   readonly payload: any;
//   constructor(payload?: any) {
//     this.payload = payload;
//   }
// }

export type Actions = SetCources | SearchCource;
