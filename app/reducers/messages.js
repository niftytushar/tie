import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const messages = createReducer([], {
  [types.LOGIN_USER_SUCCESS](state, action) {
    return [];
  },
  [types.GET_MESSAGE_SUCCESS](state, action) {
    const message = {
      text: action.message.reply,
      readText: action.message.reply_read,
      key: action.message.key,
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
