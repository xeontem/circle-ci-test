import { Action } from '@ngrx/store';

export const CHANGE_OBJ_VAL = '[Events] change_val';
export const SELECT_EVENT   = '[Events] select_event';

export class ChangeVal implements Action {
  readonly type = CHANGE_OBJ_VAL;

}

export class SelectEvent implements Action {
  readonly payload: any;
  readonly type = SELECT_EVENT;

  constructor(payload?: any) {
    this.payload = payload;
  }
}

export type Actions = ChangeVal | SelectEvent;
