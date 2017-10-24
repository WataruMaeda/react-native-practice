/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList
} from 'react-native';

class Item {
  constructor(title, image) {
    this.title = title;
    this.image = image;
  }
}

const items = [
  new Item (
    'People',
    require('./assets/images/ppl.jpg')
  ),
  new Item (
    'Fire',
    require('./assets/images/fire.jpg')
  ),
  new Item (
    'Child',
    require('./assets/images/child.jpg')
  )
]

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');

export default class App extends Component {  
  render() {
    return (
      <View style={styles.container}>
        <FlatList
        data={items}
        keyExtractor={item=>item.image}
        renderItem={({item})=>(
          <Image 
          source={item.image}
          style={{width: DEVICE_WIDTH, height: 120}}></Image>
        )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
