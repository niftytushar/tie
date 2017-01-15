import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const suggestions = createReducer([], {
  [types.GET_MESSAGE_SUCCESS](state, action) {
    return state.concat(action.message.suggestions);
  },
  [types.SET_USER_MESSAGE](state, action) {
    return [];
  }
});
