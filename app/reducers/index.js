import { combineReducers } from 'redux';
import * as authReducer from './auth';
import * as messagesReducer from './messages';
import * as suggestionsReducer from './suggestions';
import * as settingsReducer from './settings';

export default combineReducers(Object.assign(
  authReducer,
  messagesReducer,
  suggestionsReducer,
  settingsReducer,
));
