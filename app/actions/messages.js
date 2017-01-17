import * as types from './types';
import Api from '../lib/api';

export function getResponse(message) {
  return (dispatch, getState) => {
    const { auth } = getState();
    const params = [
      `query=${encodeURIComponent(message)}`,
      `username=${auth.username}`,
    ].join('&');

    return Api.get(`/?${params}`).then(resp => {
      dispatch(setBotMessage({ message: resp }));
    }).catch( (ex) => {
      console.log(ex);
    });
  }
}

export function setBotMessage({ message }) {
  return {
    type: types.GET_MESSAGE_SUCCESS,
    message,
  }
}

export function setUserMessage({ message }) {
  return {
    type: types.SET_USER_MESSAGE,
    message,
  }
}
