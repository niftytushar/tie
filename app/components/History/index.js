import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ToolbarAndroid,
  ScrollView,
} from 'react-native';

import logo from './img/logo-full.png';

export default class History extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#ffffff',
      }}>
        <ToolbarAndroid
          logo={logo}
          style={styles.toolbar}
        />
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderCategory}>History</Text>
        </View>
        <ScrollView style={styles.container}>
          <Text style={[styles.historyText]}>Here's a summary of what happened in your team last week:</Text>
          <Text style={[styles.historyText, styles.marginTop]}>Your team Happiness score is <Text style={styles.numberColor}>85%</Text> 😄 (that's <Text style={styles.numberColor}>18%</Text> more than the week before).</Text>
          <View style={styles.marginTop}>
            <Text style={[styles.h4, styles.historyText]}>
              Total Appreciations Given 👍 - <Text style={styles.numberColor}>150</Text>
            </Text>
            <Text style={[styles.h4, styles.historyText]}>
              Past Week Active Users 👍 - <Text style={styles.numberColor}>87</Text>
            </Text>
            <Text style={[styles.h4, styles.historyText]}>
              Top <Text style={styles.numberColor}>3</Text> Receivers 👍 - Jack <Text style={styles.numberColor}>22</Text>, Emily <Text style={styles.numberColor}>14</Text>, Charlie <Text style={styles.numberColor}>10</Text>
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#ffffff',
    height: 56,
    elevation: 2,
    borderBottomWidth: 1,
    borderColor: '#e9ecf1',
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
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  historyText: {
    fontSize: 18,
  },
  marginTop: {
    marginTop: 20,
  },
  numberColor: {
    color: 'orange',
  },
});
