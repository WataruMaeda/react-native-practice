/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';

// Components
import { TouchableOpacity, Image } from 'react-native';

// Redux
import { Provider } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './src/action';
import { store } from './src/store';

// Navigation
import { StackNavigator } from 'react-navigation';
import Home from './src/screens/Home';
const Navigation = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <Navigation/>
      </Provider>
    );
  }
}