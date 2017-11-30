import { createFeatureSelector, createSelector } from '@ngrx/store';
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
    case eventsActions.CHANGE_OBJ_VAL: return Object.assign({}, state, {value: 'changed value from reducer' + `${Math.round(Math.random() * 10)}`});
    case eventsActions.SELECT_EVENT:   return Object.assign({}, state, {selectedEvent: action['payload']});
    default:                           return state;
  }
}

//---------------------- AppState getters ------------------------------------------------
const getEventsState = createFeatureSelector<EventsState>('eventsReducer');

//----------------------------------- main component selector ----------------------------
const getValue = (state: EventsState) => state.value;// get value from events state
const getselectedEvent = (state: EventsState) => state.selectedEvent;// get value from events state

export const valueSelector = createSelector(getEventsState, getValue);
export const eventSelector = createSelector(getEventsState, getselectedEvent);
