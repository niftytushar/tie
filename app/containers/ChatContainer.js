import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

import Chat from './../components/Chat';

class ChatContainer extends Component {
  render() {
    return (
      <Chat {...this.props} />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    messages: state.messages,
    suggestions: state.suggestions,
    settings: state.settings,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
