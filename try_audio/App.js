/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StackNavigator } from 'react-navigation';
import AudioListScreen from './app/screens/AudioListScreen';

const App = StackNavigator({
  AudioList: { screen: AudioListScreen }
});

export default App;