import * as headerActions from '../actions/header.action';
import { FirestoreAuthService } from '../services/firestore-auth.service';

export interface HeaderState {
  signoutCounter: number;
}

const initialState: HeaderState = {
  signoutCounter: 0
};

export function headerReducer(state = initialState, action: headerActions.Actions): HeaderState {
  switch (action.type) {
    case headerActions.LOGIN:  return state;
    case headerActions.LOGOUT: return { signoutCounter: state.signoutCounter + 1, ...state };
    default:                   return state;
  }
}

// export const getShowSidenav = (state: State) => state.showSidenav;
