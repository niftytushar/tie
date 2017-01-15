import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const suggestions = createReducer([], {
  [types.LOGIN_USER_SUCCESS](state, action) {
    return [];
  },
  [types.GET_MESSAGE_SUCCESS](state, action) {
    return state.concat(action.message.suggestions);
  },
  [types.SET_USER_MESSAGE](state, action) {
    return [];
  }
});
