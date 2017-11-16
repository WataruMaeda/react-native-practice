/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
const placeholderImage = require('./assets/photo-camera.png');

export default class App extends Component {
  constructor() {
    super();
    this.state = { image_path: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Pick Image from Library
        </Text>
        {this.state.image_path.length == 0 ?
          <Image source={placeholderImage} style={styles.image_style}/> : 
          <Image source={{url: this.state.image_path}} style={styles.image_style}/>
        }
        <Button title='Select Image' style={{flex: 1}} onPress={this._pressed.bind(this)}/>
      </View>
    );
  }

  _pressed() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image.path);
      this.setState({image_path: image.path})
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image_style: {
    width: 300, 
    height: 300, 
    margin: 10, 
    backgroundColor: 'gray'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
