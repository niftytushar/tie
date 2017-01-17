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
      feedbackOption: 'Feedback Status',
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
        <Text style={styles.notification}>
          {this.props.notifications.notification}
        </Text>
        <View style={styles.container}> 
          <TouchableOpacity style={{margin: 10}} onPress={this.onAskFeedbackTap}>
              <View style={styles.actions}>
                <Text style={styles.actionText}>Ask for feedback</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={{margin: 10}} onPress={this.onGiveFeedbackTap}>
              <View style={styles.actions}>
                {
                  this.props.notifications.notification_key === 'feedback_requested' ?
                    (
                      <Text style={styles.notificationIcon}>🔴</Text>
                    ) :
                    undefined
                }
                <Text style={styles.actionText}>Give Feedback</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={{margin: 10}} onPress={this.onRecievedFeedbackTap}>
              <View style={styles.actions}>
                {
                  this.props.notifications.notification_key === 'feedback_received' ?
                    (
                      <Text style={styles.notificationIcon}>🔴</Text>
                    ) :
                    undefined
                }
                <Text style={styles.actionText}>Feedback Status</Text>
              </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  notification: {
    fontSize: 18,
    marginTop: 25,
    paddingHorizontal: 10,
  },
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
    borderWidth: 0.75,
    borderColor: '#95cce6',
    borderRadius: 60,
    minWidth: 240,
  },
  actionText: {
    color: '#919191',
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
  },
  notificationIcon: {
    fontSize: 11,
    color: '#c96a6a',
  },
});
