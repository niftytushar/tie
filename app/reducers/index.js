import { combineReducers } from 'redux';
import * as messagesReducer from './messages';

export default combineReducers(Object.assign(
  messagesReducer,
));
