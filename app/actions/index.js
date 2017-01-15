import * as AuthActions from './auth';
import * as MessageActions from './messages';
import * as SettingActions from './settings';

export const ActionCreators = Object.assign({},
  AuthActions,
  MessageActions,
  SettingActions,
);
