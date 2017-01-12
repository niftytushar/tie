import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const settings = createReducer({
  speechOut: true,
}, {
  [types.TOGGLE_SPEECH_OUT](state, action) {
    const newState = Object.assign({}, {
      speechOut: !state.speechOut,
    });
    return newState;
  },
});
