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
          <View>
            <Text style={[styles.h4, styles.historyText]}>
              Feedback from Amelia
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.rating}>⭐⭐⭐⭐⭐</Text>
              <Text style={styles.timestamp}>17th Jan, 2017</Text>
            </View>
            <View>
              <Text style={styles.historyText}>"Excellent Presentation"</Text>
              <Text style={styles.historyText}>Received Star Award and a £50 Boohoo gift card.</Text>
            </View>
          </View>

          <View>
            <Text style={[styles.h4, styles.historyText]}>
              Feedback from Harry
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.rating}>⭐⭐⭐</Text>
              <Text style={styles.timestamp}>15th Jan, 2017</Text>
            </View>
            <View>
              <Text style={styles.historyText}>"Great content!. But you can work on your speed."</Text>
              <Text style={styles.historyText}>Received Star Award and a £25 Boohoo gift card.</Text>
            </View>
          </View>

          <View>
            <Text style={[styles.h4, styles.historyText]}>
              Feedback from George
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.rating}>⭐⭐⭐⭐</Text>
              <Text style={styles.timestamp}>14th Jan, 2017</Text>
            </View>
            <View>
              <Text style={styles.historyText}>"Good work. Keep it up."</Text>
              <Text style={styles.historyText}>Received Star Award.</Text>
            </View>
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
  rating: {
    flex: 1,
  },
  h4: {
    fontWeight: 'bold',
    marginTop: 20,
  },
  timestamp: {
    fontSize: 12,
    fontStyle: 'italic',
  },
  historyText: {
    fontSize: 18
  },
});
