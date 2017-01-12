import * as types from './types';
import Api from '../lib/api';

export function getResponse(message) {
  return (dispatch, getState) => {
    const params = [
      `query=${encodeURIComponent(message)}`,
    ].join('&');

    return Api.get(`/?${params}`).then(resp => {
      dispatch(setResponse({ message: resp }));
    }).catch( (ex) => {
      console.log(ex);
    });
  }
}

export function setResponse({ message }) {
  return {
    type: types.GET_MESSAGE_SUCCESS,
    message,
  }
}
