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
      <View style={{
        flexDirection: 'row',
        alignItems: 'flex-end', 
        padding: 20,
        paddingTop: 0,
      }}>
        <View style={styles.avatar}>
        </View>
        <View style={{flex: 1, paddingRight: 50}}>
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
    backgroundColor: '#e9ecf1'
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
  }
});
