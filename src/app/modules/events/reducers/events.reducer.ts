import * as eventsActions from '../actions/events.action';

export interface SelectedEvent {
	type: string,
	title?: string,
	description?: string,
	duration?: number,
	id?: string,
	location?: string,
	resources?: Array<any>,
	speakers?: Array<any>,
};

export interface EventsState {
  value: string;
  selectedEvent: SelectedEvent;
}

const initialState: EventsState = {
  value: 'test value',
	selectedEvent: {type: 'select event'}
};

export function eventsReducer(state = initialState, action: eventsActions.Actions): EventsState {
  switch (action.type) {
    case eventsActions.CHANGE_OBJ_VAL: return Object.assign({}, state, {value: 'changed value from reducer' + `${Math.random()}`});
    case eventsActions.SELECT_EVENT: return Object.assign({}, state, {selectedEvent: action['payload']});
    default:
      return state;
  }
}

// export const getShowSidenav = (state: State) => state.showSidenav;
