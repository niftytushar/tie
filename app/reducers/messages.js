import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const messages = createReducer([
    { text: 'Hi, welcome to Auckland Castle. How can I help you today?', type: 'BOT' },
  ], {
  [types.GET_MESSAGE_SUCCESS](state, action) {
    const message = {
      text: action.message,
      type: 'BOT',
    };
    return state.concat([message]);
  },
  [types.SET_USER_MESSAGE](state, action) {
    const message = {
      text: action.message,
      type: 'USER',
    };
    return state.concat([message]);
  },
});
