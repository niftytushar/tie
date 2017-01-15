import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const auth = createReducer({}, {
  [types.LOGIN_USER_SUCCESS](state, action) {
    const newState = Object.assign({}, {
      username: action.username,
    });
    return newState;
  },
});
