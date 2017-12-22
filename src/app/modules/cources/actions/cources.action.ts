import { Action } from '@ngrx/store';
import { Cource } from '../reducers/cources.reducer';
import { Observable } from 'rxjs';

export const SET_COURCES = '[Cources] set_cources';

export class SetCources implements Action {
  readonly type = SET_COURCES;
  readonly payload: Observable<Cource[]>;

  constructor(payload: Observable<Cource[]>) {
    this.payload = payload;
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

export type Actions = SetCources;
