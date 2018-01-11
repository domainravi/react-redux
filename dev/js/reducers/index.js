
import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import activeEventReducer from './activeEventReducer';

const allReducers = combineReducers({
  events: eventsReducer,
  activeEvent: activeEventReducer
});

export default allReducers;
