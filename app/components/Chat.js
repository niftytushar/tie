import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ToolbarAndroid,
  TextInput
} from 'react-native';
import SpeechAndroid from 'react-native-android-voice';

export default class Chat extends Component {
  constructor() {
    super();

    this.state = { messageText: '' };

    this.textSpeech = this.textSpeech.bind(this);
  }

  async textSpeech() {
    try {
      const spokenText = await SpeechAndroid.startSpeech("Speak up!", SpeechAndroid.ENGLISH);
      this.setState({
        messageText: spokenText,
      });
    } catch(error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          title="Tie"
          titleColor="#ffffff"
          style={styles.toolbar}
        />
        <View style={{flex: 1}}>
          <View style={{flex: 1, paddingTop: 30}}>
            <View style={{flexDirection: 'row', alignItems: 'center',  padding: 15}}>
              <View style={styles.avatar}>
              </View>
              <View style={styles.bubbleBot}>
                <Text style={styles.text}>jdsKJNDKclkCN jhajk jshabJ jsbaj JAS JBaj dbjB BSDJB</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center',  padding: 20, paddingTop: 0}}>
              <View style={styles.bubbleUser}>
                <Text style={styles.text}>jdsKJNDKclkCN jhajk jshabJ jsbaj JAS JBaj dbjB BSDJB</Text>
              </View>
              <View style={styles.avatar}>
              </View>
            </View>
          </View>
          <View style={styles.sendingBox}>
            <TextInput
              style={{flex: 1, height: 50,color: '#ffffff', marginRight: 10}}
              value={this.state.messageText}
            />
            <TouchableHighlight onPress={this.textSpeech}>
              <Text>Click</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#026AA7',
    height: 56,
    elevation: 2,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 60,
    backgroundColor: '#026AA7',
  },
  bubbleUser: {
    borderRadius: 15,
    borderBottomRightRadius: 0,
    backgroundColor: '#026AA7',
    marginRight: 15,
    padding: 10,
    flex: 1,
  },
  bubbleBot: {
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    backgroundColor: '#026AA7',
    marginLeft: 15,
    padding: 10,
    flex: 1,
  },
  sendingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#333333',
    paddingTop: 0,
    paddingBottom: 0,
  },
  text: {
    color: '#ffffff',
    lineHeight: 14,
    fontSize: 14,
  }
});
