import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import logo from './img/logo-full.png';

export default class Feedback extends Component {
  constructor() {
    super();

    this.state = {
      feedbackOption: '',
    };

    this.onAskFeedbackTap = this.onAskFeedbackTap.bind(this);
    this.onGiveFeedbackTap = this.onGiveFeedbackTap.bind(this);
    this.onRecievedFeedbackTap = this.onRecievedFeedbackTap.bind(this);

  }

  onRecievedFeedbackTap() {
    this.setState({
      feedbackOption: 'Received Feedback',
    }, () => {
      this.props.onFeedbackActionTap(this.state.feedbackOption);
    });
  }

  onGiveFeedbackTap() {
    this.setState({
      feedbackOption: 'Give Feedback',
    }, () => {
      this.props.onFeedbackActionTap(this.state.feedbackOption);
    });
  }

  onAskFeedbackTap() {
    this.setState({
      feedbackOption: 'Ask for feedback',
    }, () => {
      this.props.onFeedbackActionTap(this.state.feedbackOption);
    });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          padding: 20,
          paddingTop: 60,
          backgroundColor: '#ffffff',
        }}
      >
        <Image source={logo} />
        <View style={styles.container}> 
          <TouchableOpacity style={{margin: 10}} onPress={this.onAskFeedbackTap}>
              <View style={styles.actions}>
                <Text style={styles.actionText}>Ask for feedback</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={{margin: 10}} onPress={this.onGiveFeedbackTap}>
              <View style={styles.actions}>
                <Text style={styles.actionText}>Give Feedback</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={{margin: 10}} onPress={this.onRecievedFeedbackTap}>
              <View style={styles.actions}>
                <Text style={styles.actionText}>Received Feedback</Text>
              </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actions: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 60,
    minWidth: 240,
    backgroundColor: '#e9ecf1',
  },
  actionText: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
  },
});
