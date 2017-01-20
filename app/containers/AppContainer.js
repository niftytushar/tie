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
      case 'category':
        return (
          <CategoryPage
            {...this.props}
            onCategoryTap={() => {
              navigator.push({ id: 'feedback' });
            }}
          />
        );

      case 'feedback':
        return (
          <Feedback
            {...this.props}
            onFeedbackActionTap={(feedbackOption) => {
              navigator.push({ id: 'chat', feedbackOption: feedbackOption });
            }}
            onHistoryTap={() => {
              navigator.push({ id: 'history' });
            }}
          />
        );

      case 'auth':
        return (
          <LoginPage
            {...this.props}
            onLoginSuccess={() => {
              navigator.push({ id: 'category' });
            }}
          />
        );

      case 'chat':
        return (
          <ChatContainer
            initalMessage={route.feedbackOption}
          />
        );

      case 'history':
        return (
          <History
            onBackTap={() => {
              navigator.pop();
            }}
          />
        );
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

function mapStateToProps(state) {
  return {
    notifications: state.notifications,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
