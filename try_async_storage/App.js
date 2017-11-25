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
  Button,
  Alert
} from 'react-native';

// Model

class Name {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  save(callback = (success) => {}) {
    let jsonString = JSON.stringify(this);
    console.log('save: Json string is..' + jsonString);
    AsyncStorage.setItem('@USER_NAME_KEY', jsonString, (error)=>{
      (error == null) ?
        callback(true) : callback(false);
    });
  }

  get(callback = (success, value) => {}) {
    AsyncStorage.getItem('@USER_NAME_KEY', (error, value)=> {
      console.log('get: Saved value is..' + value);
      (value != null && error == null) ?
        callback(true, JSON.parse(value)) : callback(false, '');
    });
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
        <Button title="Tap to Save" onPress={() => this._pressedSave()}/>
        <Button title="Show stored value " onPress={() => this._pressedShow()}/>
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
    this.name.save((success) => {
      (success == true) ?
        Alert.alert('Saved') : Alert.alert('Failed'); 
    });
  }

  _pressedShow() {
    this.name.get((success, value) => {
      (success) ? 
        Alert.alert('Full name is ' + value.last + value.first) : Alert.alert('Failed');
    }); 
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
