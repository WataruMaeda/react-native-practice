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

// Model
class Name {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
}

export default class App extends Component {
  constructor() {
    super();
    this.name = new Name('', '');
    this.state = {
      first_name: this.name.first,
      last_name: this.name.last
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Fill the forms
        </Text>
        <TextInput
          placeholder="First Name"
          style={{fontSize: 20, margin: 8}}
          title={this.state.last_name}
          onChangeText={this._updateFirstName}
          />
        <TextInput
          placeholder="Last Name"
          style={{fontSize: 20, margin: 8}}
          title={this.state.last_name}
          onChangeText={this._updateLastName}
          />
        <Text style={styles.welcome}>
        Your Full Name is .. {this.state.first_name + this.state.last_name}
        </Text>
        <Button title="Tap to Save" onPress={this._pressedSave}/>
      </View>
    );
  }

  // Actions
  _updateFirstName = (text) => {
    this.name.first = text;
    this.setState({first_name: this.name.first});
    console.log(this.name.first);
  }

  _updateLastName = (text) => {
    this.name.last = text;
    this.setState({last_name: this.name.last});
    console.log(this.name.last);
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
