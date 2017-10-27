
import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet, Button, Alert } from 'react-native';
import { styles } from '../style';

import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../action';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={ styles.text_input }
          onChangeText={(text) => this.props.updateAlertMessage(text)}
          value={ this.props.alert_message } />
        <Button 
          style={ styles.button_text }
          title={ this.props.alert_message }
          onPress={ this._tappedAlert.bind(this) }
        />
        <Button
          style={styles.button_text}
          title='NEXT SCREEN'
          onPress={this._tappedButton.bind(this)}
        />
      </View>
    );
  }

  _tappedAlert(e) {
    Alert.alert(this.props.alert_message);
  }

  _tappedButton(e) {
    const { navigate } = this.props.navigation;
    navigate('Details');
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);