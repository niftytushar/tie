/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import SpeechAndroid from 'react-native-android-voice';

export default class tie extends Component {
  componentDidMount() {
    // this.textSpeech();
  }

  async textSpeech() {
    console.log('Start speech text');
    try {
      const spokenText = await SpeechAndroid.startSpeech("Speak yo", SpeechAndroid.ENGLISH);
      console.log(spokenText);
    } catch(error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.textSpeech}>
          <Text>Click</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('tie', () => tie);
