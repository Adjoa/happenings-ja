import { combineReducers } from 'redux';
import eventsReducer from './events_reducer'

export const rootReducer = combineReducers({ events: eventsReducer });