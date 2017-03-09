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
import CategoryPage from './../components/CategoryPage';
import Feedback from './../components/CategoryPage/Feedback';
import ChatContainer from './ChatContainer';
import History from './../components/History';

class AppContainer extends Component {
  constructor() {
    super();

    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route, navigator) {
    switch (route.id) {
      case 'chat':
        return (
          <ChatContainer
          />
        );
    }
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{ id: 'chat' }}
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

function mapStateToProps(state) {
  return {
    notifications: state.notifications,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
