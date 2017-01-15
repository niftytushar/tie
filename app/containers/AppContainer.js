import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import {
  StyleSheet,
  View,
  Navigator,
} from 'react-native';

import LoginPage from './../components/LoginPage';
import ChatContainer from './ChatContainer';

class AppContainer extends Component {
  constructor() {
    super();

    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route, navigator) {
    switch (route.id) {
      case 'auth':
        return (
          <LoginPage
            {...this.props}
            onLoginSuccess={() => {
              navigator.push({ id: 'chat' });
            }}
          />
        );

      case 'chat':
        return (<ChatContainer />);
    }
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{ id: 'auth' }}
        renderScene={this.renderScene}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
