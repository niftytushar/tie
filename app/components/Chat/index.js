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
import Tts from 'react-native-tts';
import mic from './../../../assets/img/ic_keyboard_voice_primary.png';
import logo from './../../../assets/img/icon-white.png';
import more from './../../../assets/img/ic_more_vert_white_24dp.png';
import volumeOff from './../../../assets/img/ic_volume_off_white_24dp.png';
import volumeOn from './../../../assets/img/ic_volume_up_white_24dp.png';

export default class Chat extends Component {
  constructor() {
    super();

    this.state = { messageText: '' };

    Tts.speak('Hello, my name is Tie. How can I help you?');

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
    const toolbarActions = [
      {
        title: 'Volume',
        icon: volumeOn,
        show: 'always',
      },
      {
        title: 'More',
        icon: more,
        show: 'always',
      },
    ];

    return (
      <View style={styles.container}>
        <ToolbarAndroid
          title="Auckland Castle"
          titleColor="#ffffff"
          style={styles.toolbar}
          navIcon={logo}
          actions={toolbarActions}
        />
        <View style={{flex: 1}}>
          <View style={{flex: 1}}>
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
            <TouchableHighlight
              onPress={this.textSpeech}
              style={styles.touchablaButton}
              underlayColor="#e4e4e4"
            >
              <Image source={mic}/>
            </TouchableHighlight>
            <TextInput
              style={styles.textInput}
              value={this.state.messageText}
              underlineColorAndroid="#ffffff"
            />
            <TouchableHighlight
              onPress={this.textSpeech}
              style={styles.touchableSend}
              underlayColor="#e4e4e4"
            >
              <Text style={{ color: '#3d81a0', fontWeight: 'bold'}}>SEND</Text>
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
    backgroundColor: '#3d81a0',
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
    marginLeft: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e4e4e4',
    borderRadius: 2,
  },
  touchablaButton: {
    height: 35,
    width: 35,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableSend: {
    padding: 6,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
