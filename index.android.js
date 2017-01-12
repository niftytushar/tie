/**
 * tie.ai
 * https://github.com/niftytushar/tie
 * @flow
 */

import React from 'react';
import AppContainer from './app/containers/AppContainer';

import {
  AppRegistry,
} from 'react-native';

const App = () => (
  <AppContainer />
)

AppRegistry.registerComponent('tie', () => App);
