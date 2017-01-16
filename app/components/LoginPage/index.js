import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import user1 from './img/jonathan.jpg';
import user2 from './img/user.jpg';


export default class LoginPage extends Component {
  constructor() {
    super();

    this.onUser1Selected = this.onUser1Selected.bind(this);
    this.onUser2Selected = this.onUser2Selected.bind(this);
  }

  onUser1Selected() {
    // Set logged in user
    this.props.loginUser({ username: 'jonathan' });

    // Call login success method
    this.props.onLoginSuccess();
  }

  onUser2Selected() {
    // Set logged in user
    this.props.loginUser({ username: 'rebecca' });

    // Call login success method
    this.props.onLoginSuccess();
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#3d81a0',
          padding: 20,
          paddingTop: 40,
          
        }}
      >
        <Text style={{ textAlign: 'center', fontSize: 24, color: '#ffffff', margin: 20, fontWeight: 'bold'}}>Auckland Castle</Text>
        <View style={styles.userContainer}>
          <View style={styles.user}>
            <TouchableOpacity
              style={styles.userImageContainer}
              onPress={this.onUser1Selected}
            >
              <Image source={user1} style={styles.userImage} />
            </TouchableOpacity>
            <Text style={styles.userName}>Jonathan</Text>
          </View>
          <View style={styles.user}>
            <TouchableOpacity
              style={styles.userImageContainer}
              onPress={this.onUser2Selected}
            >
              <Image source={user2}  style={styles.userImage} />
            </TouchableOpacity>
            <Text style={styles.userName}>Rebecca</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 userContainer: {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
 },
 user: {
  alignItems: 'center',
  margin: 25,
 },
 userImageContainer: {
  width: 72,
  height: 72,
  borderRadius: 80,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#e9ecf1',
 },
 userImage: {
  width: 72,
  height: 72,
  borderRadius: 80,
 },
 userName: {
  fontSize: 16,
  color: '#ffffff',
  marginTop: 15,
 }
});
