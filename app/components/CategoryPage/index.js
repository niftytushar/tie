import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import logo from './img/logo-full.png';
import feedback from './img/feedback.png';
import reward from './img/reward.png';
import shop from './img/shop.png';

export default class CategoryPage extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          padding: 20,
          paddingTop: 60,
          backgroundColor: '#ffffff',
        }}
      >
        <Image source={logo} />
        <View style={styles.container}> 
          <TouchableOpacity style={{margin: 5}} onPress={this.props.onCategoryTap}>
              <View style={styles.actions}>
                <Text style={{flex: 1, fontSize: 20}}>Feedback</Text>
                <Image source={feedback}/>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={{margin: 5}}>
              <View style={styles.actions}>
                <Text style={{flex: 1, fontSize: 20}}>Reward</Text>
                <Image source={reward}/>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={{margin: 5}}>
              <View style={styles.actions}>
                <Text style={{flex: 1, fontSize: 20}}>Shop</Text>
                <Image source={shop}/>
              </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actions: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 3,
    minWidth: 200,
    backgroundColor: '#e9ecf1',
  }
});
