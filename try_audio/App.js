/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StackNavigator } from 'react-navigation';

import { Provider } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './src/action';

import AudioList from './src/screens/AudioListScreen';
import Audio from './src/screens/AudioScreen';

import { store } from './src/store';

const Navigation = StackNavigator({
  AudioList: { screen: AudioList },
  Audio: { screen: Audio }
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