import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import chat from './../../../assets/img/arrow-chat-secondary.png';


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
        </View>
        <View style={{flex: 1, paddingRight: 50, flexDirection: 'row', alignItems: 'flex-end'}}>
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
    height: 50,
    width: 50,
    borderRadius: 60,
    backgroundColor: '#77bacd',
    marginRight: 15,
  },
  textBot: {
    color: '#4d5d74',
    lineHeight: 20,
    fontSize: 14,
  },
  chatImage: {
    position: 'relative',
    left: -10,
    bottom: 0,
  }
});
