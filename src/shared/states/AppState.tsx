import { combineReducers } from 'redux';
import { RSVPFormPageStateReducer } from '../../rsvp-form/states/RSVPFormPageState';

export const AppStateReducer = combineReducers({
  rsvp: RSVPFormPageStateReducer,
});

export type AppState = ReturnType<typeof AppStateReducer>;
