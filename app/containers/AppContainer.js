import React, { Component } from 'react';
import Chat from './../components/Chat';

import {
  StyleSheet,
  View,
} from 'react-native';

export default class AppContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Chat />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
