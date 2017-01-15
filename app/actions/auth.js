import * as types from './types';

export function loginUser({ username }) {
  return {
    type: types.LOGIN_USER_SUCCESS,
    username,
  }
}
