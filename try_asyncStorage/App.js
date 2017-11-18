/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TextInput,
  Button
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Fill the forms
        </Text>
        <TextInput
          placeholder="First Name"
          style={{fontSize: 20, margin: 8}}
          onChangeText={this._updateFirstName}
          />
        <TextInput
          placeholder="Last Name"
          style={{fontSize: 20, margin: 8}}
          onChangeText={this._updateLastName}
          />
        <Button title="Tap to Save" onPress={this._pressedSave}/>
      </View>
    );
  }

  // Actions
  _updateFirstName = (text) => {
    console.log(text);
  }

  _updateLastName = (text) => {
    console.log(text);
  }

  _pressedSave() {
    console.log('save');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
