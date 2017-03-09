import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import chat from './img/arrow-chat-secondary.png';
import botPic from './img/ic_bot.png';

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
        <View style={styles.avatar}>
          <Image source={botPic} />
        </View>
        <View style={{flex: 1, paddingRight: 50, flexDirection: 'row', alignItems: 'flex-end', position: 'relative', left: -3}}>
          <Image source={chat} style={styles.chatImage}/>
          <View style={styles.bubbleBot}>
            <Text style={styles.textBot}>{this.props.message}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bubbleBot: {
    borderRadius: 5,
    borderBottomLeftRadius: 0,
    padding: 10,
    backgroundColor: '#e9ecf1',
    position: 'relative',
  },
   avatar: {
    height: 48,
    width: 48,
    borderRadius: 60,
  },
  textBot: {
    color: '#4d5d74',
    lineHeight: 20,
    fontSize: 16,
  },
  chatImage: {
    position: 'relative',
    left: 5,
    bottom: 0,
  }
});
