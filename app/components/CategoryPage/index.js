import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import logo from './img/logo-full.png';
import feedback from './img/feedback.png';
import reward from './img/reward.png';
import shop from './img/shop.png';

export default class CategoryPage extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getResponse('root');
    this.props.getNotifications();
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
        <Text style={styles.programmeName}>Welcome to the iAppreciate Program</Text>
        <View style={styles.container}>
          <TouchableOpacity style={{margin: 10}} onPress={this.props.onCategoryTap}>
              <View style={styles.actions}>
                {
                  this.props.notifications.notification_key === 'feedback_received' ||
                  this.props.notifications.notification_key === 'feedback_requested' ?
                    (
                      <Text style={styles.notificationIcon}>🔴</Text>
                    ) :
                    undefined
                }
                <Text style={styles.actionText}>Feedback</Text>
                <Image source={feedback} />
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={{margin: 10}}>
              <View style={styles.actions}>
                <Text style={styles.actionText}>Reward</Text>
                <Image source={reward} />
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={{margin: 10}}>
              <View style={styles.actions}>
                <Text style={styles.actionText}>Redeem</Text>
                <Image source={shop} />
              </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  programmeName: {
    marginTop: 15,
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
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderWidth: 0.75,
    borderColor: '#95cce6',
    borderRadius: 60,
    minWidth: 220,
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
