import { Action } from '@ngrx/store';

export const LOGIN = '[Login] login';
export const LOGOUT = '[Login] logout';

export class Login implements Action {
  readonly type = LOGIN;

}

export class Logout implements Action {
  readonly payload: any;
  readonly type = LOGOUT;

  constructor(payload?: any) {
    this.payload = payload;
  }
}

console.log(new Logout);


export type Actions = Login | Logout;
