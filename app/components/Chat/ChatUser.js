import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import chat from './../../../assets/img/arrow-chat-primary.png';


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
        <View style={{flex: 1, paddingLeft: 50, flexDirection: 'row', justifyContent: 'flex-end',alignItems: 'flex-end'}}>
          <View style={styles.bubbleUser}>
            <Text style={styles.textUser}>{this.props.message}</Text>
          </View>
          <Image source={chat} style={styles.chatImage} />
        </View>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>JD</Text>
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
   avatar: {
    height: 48,
    width: 48,
    borderRadius: 60,
    backgroundColor: '#e9ecf1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#4d5d74',
    fontSize: 14,
  },
  textUser: {
    color: '#ffffff',
    lineHeight: 20,
    fontSize: 14,
  },
  chatImage: {
    position: 'relative',
    right: 7,
    bottom: 0,
  }
});
