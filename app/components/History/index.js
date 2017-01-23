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
          <Text style={[styles.historyText, styles.marginTop]}>Your team Happiness score is 85% 😄 (that's 18% more than the week before).</Text>
          <View style={styles.marginTop}>
            <Text style={styles.h4}>
              <Text style={styles.bold}>Total Appreciations Given</Text> - 150
            </Text>
            <Text style={styles.h4}>
              <Text style={styles.bold}>Past Week Active Users</Text> - 87
            </Text>
            <Text style={styles.h4}>
              <Text style={styles.bold}>Top 3 Receivers</Text> - Jack <Text style={styles.countBlockText}>22</Text>, Emily <Text style={styles.countBlockText}>14</Text>, Charlie <Text style={styles.countBlockText}>10</Text>
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
  countBlockText: {
    color: '#c96a6a',
    fontSize: 12,
  },
});
