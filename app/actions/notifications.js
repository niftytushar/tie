import * as types from './types';
import Api from '../lib/api';

export function getNotifications() {
  return (dispatch, getState) => {
    const { auth } = getState();
    const params = [
      `username=${auth.username}`,
    ].join('&');

    return Api.get(`/notifs?${params}`).then(resp => {
      dispatch(setNotificationsResponse({ notification: resp }));
    }).catch( (ex) => {
      console.log(ex);
    });
  }
}

export function setNotificationsResponse({ notification }) {
  return {
    type: types.GET_NOTIFICATION_SUCCESS,
    notification,
  }
}
