/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './src/action';
import { store } from './src/store';

import Home from './src/screens/Home';
const image = require('./src/assets/icons/menu.png');

const Navigation = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: (
        <TouchableOpacity>
          <Image source={image} style={{width: 24, height: 24, margin: 10}}/>
        </TouchableOpacity>
      )
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