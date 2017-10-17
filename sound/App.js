import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <TouchableOpacity 
        onPress={this.handlePress()}
        style={styles.container}>
        <View>
          <Text>Hello World!</Text>
        </View>
      </TouchableOpacity>
    );
  }

  handlePress() {
    console.log('Hey');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
