
import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet, Button, Alert } from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert_message: 'hello'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40, width:300, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({alert_message: text})}
          value={ this.state.alert_message } />
        <Button 
          style={styles.button_text}
          title={ this.state.alert_message }
          onPress={this._tappedButton.bind(this) }
        />
      </View>
    );
  }

  _tappedButton(e) {
    Alert.alert(this.state.alert_message);
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
