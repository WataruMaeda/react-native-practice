
import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../action';

export class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40, width:300, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.props.updateAlertMessage(text)}
          value={ this.props.alert_message } />
        <Button 
          style={styles.button_text}
          title={ this.props.alert_message }
          onPress={this._tappedButton.bind(this) }
        />
      </View>
    );
  }

  _tappedButton(e) {
    Alert.alert(this.props.alert_message);
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);