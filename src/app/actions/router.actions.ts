import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export const GO = '"ROUTER_NAVIGATION"';
export const BACK = '[Router] Back';
export const FORWARD = '[Router] Forward';

export class Go implements Action {
  readonly type = GO;

  constructor(public payload: {
    event: any[];
    routerState: NavigationExtras;
  }) {}
}

export class Back implements Action {
  readonly type = BACK;
}

export class Forward implements Action {
  readonly type = FORWARD;
}

export type Actions
  = Go
  | Back
  | Forward;



  // ap:: Apply A => A(a -> b) -> Aa -> Ab
  // lift2:: Apply A => (a -> b -> c) -> Aa -> Ab -> Ac

  // Aa.map(a => Ab.map(b => f(a)(b))).flatten()
// map(map(f)(Aa))
  // Aa.apply(Aa.map(f))(Ab)
