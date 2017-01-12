import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class ChatUser extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center',  padding: 20, paddingTop: 0, justifyContent: 'flex-end'}}>
        <View style={styles.bubbleUser}>
          <Text style={styles.textUser}>{this.props.message}</Text>
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
    marginLeft: 50,
    marginRight: 15,
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
  }
});
