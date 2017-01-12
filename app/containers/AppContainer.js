import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import {
  StyleSheet,
  View,
} from 'react-native';
import Chat from './../components/Chat';

class AppContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Chat {...this.props} />
      </View>
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
    messages: state.messages,
    settings: state.settings,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
