import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const notifications = createReducer({}, {
  [types.GET_NOTIFICATION_SUCCESS](state, action) {
    console.log(action);
    return Object.assign({}, action.notification);
  },
});
