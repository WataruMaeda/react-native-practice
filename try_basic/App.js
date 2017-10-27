import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store'
import { StackNavigator } from 'react-navigation';

import Home from './src/screens/Home';
import Details from './src/screens/Details';

const Navigator = StackNavigator({
  Home: {screen: Home},
  Details: {screen: Details}
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator/>
      </Provider>
    );
  }
}