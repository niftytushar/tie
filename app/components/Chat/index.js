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
import SpeechAndroid from 'react-native-android-voice';
import Tts from 'react-native-tts';

import ChatBot from './ChatBot';
import ChatUser from './ChatUser';
import SuggestionItem from './SuggestionItem';

import mic from './img/ic_mic.png';
// import more from './img/ic_more_vert_white.png';
import logo from './img/logo-full.png';
import volumeOff from './img/ic_volume_off.png';
import volumeOn from './img/ic_volume_up.png';
import feedbackIcon from './img/feedback.png';

export default class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = { messageText: '' };

    this.textSpeech = this.textSpeech.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.onSendClick = this.onSendClick.bind(this);
    this.onActionSelected = this.onActionSelected.bind(this);
    this.onScrollViewContentSizeChange = this.onScrollViewContentSizeChange.bind(this);
    this.onSuggestionClick = this.onSuggestionClick.bind(this);
    this.speakOutLastMessage = this.speakOutLastMessage.bind(this);
  }

  componentDidMount() {
    this.props.getResponse(this.props.initalMessage);
  }

  componentDidUpdate(prevProps) {
    if (this.props.messages.length > prevProps.messages.length) {
      this.speakOutLastMessage();
    }    
  }

  onSendClick() {
    const message = this.state.messageText;

    if (!message) return;

    this.props.setUserMessage({ message });
    this.onMessageChange('');
    this.props.getResponse(this.state.messageText);
  }

  onMessageChange(text) {
    this.setState({
      messageText: text,
    });
  }

  onActionSelected(position) {
    if (position === 0) {
      this.props.toggleSpeechOut();
    }
  }

  onScrollViewContentSizeChange(contentWidth, contentHeight) {
    this.refs.scrollView.scrollTo({ y: contentHeight });
  }

  onSuggestionClick(suggestion) {
    this.setState({
      messageText: suggestion,
    }, () => {
      this.onSendClick();
    });
  }

  async textSpeech() {
    try {
      const spokenText = await SpeechAndroid.startSpeech("Say something...", SpeechAndroid.ENGLISH);
      this.setState({
        messageText: spokenText,
      }, () => {
        this.onSendClick();
      });
    } catch(error) {
      console.log(error);
    }
  }

  speakOutLastMessage() {
    const lastMessage = this.props.messages[this.props.messages.length - 1];

    if (
      this.props.settings.speechOut &&
      lastMessage &&
      lastMessage.type === 'BOT' &&
      lastMessage.readText &&
      typeof lastMessage.readText === 'string'
    ) {
      Tts.speak(lastMessage.readText);
    } else {
      Tts.stop();
    }
  }

  render() {
    const toolbarActions = [
      {
        title: 'Volume',
        icon: this.props.settings.speechOut ? volumeOn : volumeOff,
        show: 'always',
      },
      // {
      //   title: 'More',
      //   icon: more,
      //   show: 'always',
      // },
    ];

    return (
      <View style={styles.container}>
        <ToolbarAndroid
          logo={logo}
          style={styles.toolbar}
          actions={toolbarActions}
          onActionSelected={this.onActionSelected}
        />
        <View style={styles.subHeader}>
          <Image source={feedbackIcon} />
          <Text style={styles.subHeaderCategory}>{this.props.initalMessage}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, paddingTop: 10 }}>
            <ScrollView ref="scrollView" onContentSizeChange={this.onScrollViewContentSizeChange}>
              {
                this.props.messages.map((message, index) => {
                  if (message.type === 'BOT') {
                    return (<ChatBot key={index} message={message.text} image={message.key === 'boohoo_gift_card'} />);
                  } else {
                    return (<ChatUser key={index} message={message.text} user={this.props.auth.username} />);
                  }
                })
              }
            </ScrollView>
          </View>
          <View style={styles.suggestionsContainer}>
            <ScrollView
              style={styles.suggestionsBox}
              horizontal
            >
              {
                this.props.suggestions.map((suggestion, index) =>
                  <SuggestionItem
                    key={index}
                    suggestion={suggestion}
                    onClick={this.onSuggestionClick}
                  />
                )
              }
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
              underlineColorAndroid="transparent"
              placeholder="Type something..."
              onChangeText={this.onMessageChange}
              onSubmitEditing={this.onSendClick}
            />
            <TouchableHighlight
              onPress={this.onSendClick}
              style={styles.touchableSend}
              underlayColor="#e4e4e4"
            >
              <Text style={{ color: '#3d81a0', fontWeight: 'bold', fontSize: 16}}>SEND</Text>
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
    backgroundColor: '#ffffff',
  },
  subHeader: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    backgroundColor: '#e4e4e4',
  },
  subHeaderCategory: {
    fontSize: 16,
    marginLeft: 10,
  },
  toolbar: {
    backgroundColor: '#ffffff',
    height: 56,
    elevation: 2,
    borderBottomWidth: 1,
    borderColor: '#e9ecf1',
  },
  suggestionsContainer: {
    height: 40,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  suggestionsBox: {
    flexDirection: 'row',
  },
  suggestionItem: {
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#e4e4e4',
    borderRadius: 20,
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
    fontSize: 16,
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
  },
});
