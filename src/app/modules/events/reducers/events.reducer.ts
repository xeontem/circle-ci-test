import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as eventsActions from '../actions/events.action';
import { getValRight } from '../../../tools/lambda';

export interface SelectedEvent {
  type: string;
  title?: string;
  description?: string;
  duration?: number;
  id?: string;
  location?: string;
  visible?: string;
  resources?: Array<any>;
  speakers?: Array<any>;
}

export interface EventsState {
  value: string;
  selectedEvent: SelectedEvent;
  perfWith: number;
  withValue: number;
}

const initialState: EventsState = {
  value: 'test value',
  selectedEvent: {type: 'select event'},
  perfWith: 0,
  withValue: 0
};

export function eventsReducer(state = initialState, action: eventsActions.Actions): EventsState {
  switch (action.type) {
    case eventsActions.CHANGE_OBJ_VAL:
      return Object.assign({}, state, {value: 'changed value from reducer' + `${Math.round(Math.random() * 10)}`});
    case eventsActions.SELECT_EVENT:
      return Object.assign({}, state, {selectedEvent: action['payload']});
    case eventsActions.STORE_PREFWITH:
      return Object.assign({}, state, action['payload']);
    default:
      return state;
  }
}

// ---------------------- AppState getters ------------------------------------------------
const getEventsState = createFeatureSelector<EventsState>('eventsReducer');

// ----------------------------------- main component selector ----------------------------
// const getValue         = (state: EventsState) => state.value;// get value from events state
// const getselectedEvent = (state: EventsState) => state.selectedEvent;// get value from events state
// const getYperfWith     = (state: EventsState) => state.perfWith;// get perfWith from Y store
// const getYwithValue    = (state: EventsState) => state.withValue;// get value from Y store

export const valueSelector     = createSelector(getEventsState, getValRight('value'));
export const eventSelector     = createSelector(getEventsState, getValRight('selectedEvent'));
export const perfWithSelector  = createSelector(getEventsState, getValRight('perfWith'));
export const withValueSelector = createSelector(getEventsState, getValRight('withValue'));
