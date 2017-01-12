import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const messages = createReducer([], {
  [types.GET_MESSAGE_SUCCESS](state, action) {
    const message = {
      text: action.message,
      type: 'BOT',
    };
    return state.concat([message]);
  },
});
