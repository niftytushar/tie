import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ToolbarAndroid,
  TextInput,
  ScrollView,
  Image
} from 'react-native';
import ChatBot from './ChatBot';
import ChatUser from './ChatUser';
import SpeechAndroid from 'react-native-android-voice';

export default class Chat extends Component {
  constructor() {
    super();

    this.state = { messageText: '' };

    this.textSpeech = this.textSpeech.bind(this);
  }

  async textSpeech() {
    try {
      const spokenText = await SpeechAndroid.startSpeech("Listening...", SpeechAndroid.ENGLISH);
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
          title="Auckland Castle"
          titleColor="#ffffff"
          style={styles.toolbar}
        />
        <View style={{flex: 1}}>
          <View style={{flex: 1, paddingTop: 30}}>
            <ScrollView>
              <ChatBot message="Hi Rebecca, which skills do you want feedback on?"/>
              <ChatUser message="presentation" />
              <ChatBot message="Is it specific to an event? If so, please enter date and details." />
              <ChatUser message="sales presentation made by me on the 4th January 2017" />
              <ChatBot message="Who would you like the presentation feedback from?Jonathan Ruffer" />
              <ChatUser message="Jonathan Ruffer" />
              <ChatBot message="Great your feedback request has been sent to " />
              <ChatUser message="Jonathan Ruffer" />
            </ScrollView>
          </View>
          <View style={styles.sendingBox}>
            <TouchableHighlight onPress={this.textSpeech}>
              <Image />
            </TouchableHighlight>
            <TextInput
              style={styles.textInput}
              value={this.state.messageText}
              underlineColorAndroid="#ffffff"
            />
            <TouchableHighlight onPress={this.textSpeech}>
              <Text>SEND</Text>
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
    backgroundColor: '#77bacd',
    height: 56,
    elevation: 2,
  },
  sendingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
    height: 55,
    borderWidth: 1,
    borderColor: '#e4e4e4',
  },
  textInput: {
    flex: 1,
    color: '#333333',
    fontSize: 14,
    height: 35,
    marginRight: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e4e4e4',
    borderRadius: 2,
  },
});
