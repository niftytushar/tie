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
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bubbleUser: {
    borderRadius: 5,
    borderBottomRightRadius: 0,
    backgroundColor: '#77bacd',
    padding: 10,
  },
   avatar: {
    height: 50,
    width: 50,
    borderRadius: 60,
    backgroundColor: '#77bacd',
  },
  textUser: {
    color: '#ffffff',
    lineHeight: 20,
    fontSize: 14,
  },
  chatImage: {
    position: 'relative',
    right: 5,
    bottom: -1,
  }
});
