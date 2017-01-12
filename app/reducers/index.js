import { combineReducers } from 'redux';
import * as messagesReducer from './messages';
import * as settingsReducer from './settings';

export default combineReducers(Object.assign(
  messagesReducer,
  settingsReducer,
));
