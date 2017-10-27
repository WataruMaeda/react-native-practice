
import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../action';
import { styles } from '../style';

export class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={ styles.text_input }
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);