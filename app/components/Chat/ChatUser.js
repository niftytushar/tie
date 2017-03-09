import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import chat from './img/arrow-chat-primary.png';
import person from './img/ic_person_white.png';

export default class ChatUser extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{
        flexDirection: 'row',
        alignItems: 'flex-end', 
        padding: 20,
        paddingTop: 0,
      }}>
        <View style={{flex: 1, paddingLeft: 50, flexDirection: 'row', justifyContent: 'flex-end',alignItems: 'flex-end', position: 'relative', right: -5}}>
          <View style={styles.bubbleUser}>
            <Text style={styles.textUser}>{this.props.message}</Text>
          </View>
          <Image source={chat} style={styles.chatImage} />
        </View>
        <View style={styles.avatarContainer}>
          <Image
            source={person}
            resizeMode='cover'
            style={styles.avatar}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bubbleUser: {
    borderRadius: 5,
    borderBottomRightRadius: 0,
    backgroundColor: '#3d81a0',
    padding: 10,
  },
  avatarContainer: {
    height: 48,
    width: 48,
    backgroundColor: '#e9ecf1',
    borderRadius: 60,
    borderWidth: 0.5,
    borderColor: '#e9ecf1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    height: 40,
    width: 40,
  },
  avatarText: {
    color: '#4d5d74',
    fontSize: 14,
  },
  textUser: {
    color: '#ffffff',
    lineHeight: 20,
    fontSize: 16,
  },
  chatImage: {
    position: 'relative',
    right: 9,
    bottom: 0,
  }
});
