/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StackNavigator } from 'react-navigation';
import AudioList from './src/screens/AudioListScreen';
import Audio from './src/screens/AudioScreen';

const Navigation = StackNavigator({
  AudioList: { screen: AudioList },
  Audio: { screen: Audio }
});

export default class App extends React.Component {
  render() {
    return (
      <Navigation/ >
    );
  }
}