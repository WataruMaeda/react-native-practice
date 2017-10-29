/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StackNavigator } from 'react-navigation';

import { Provider } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './src/action';

import XXX_1 from './src/screens/XXX_1';
import XXX_2 from './src/screens/XXX_2';

import { store } from './src/store';

const Navigation = StackNavigator({
  XXX_1: { 
    screen: XXX_1,
    navigationOptions: ({ navigation }) => ({
      title: 'XXX_1'
    }),
  },
  XXX_2: { 
    screen: XXX_2,
    navigationOptions: ({ navigation }) => ({
      title: `XXX_2`
    }),
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