
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button 
          style={styles.button_text}
          title='Show Alert'
          onPress={this._tappedButton}
        />
      </View>
    );
  }

  _tappedButton() {
    Alert.alert('Tapped');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button_text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    fontStyle: 'italic',
    fontFamily: 'Baskerville',
    backgroundColor: 'transparent',
    alignItems: 'center',
  }
});
