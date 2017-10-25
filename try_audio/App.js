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
  ImageBackground,
  FlatList,
  TouchableOpacity
} from 'react-native';

class Item {
  constructor(title, image, sound) {
    this.title = title;
    this.image = image;
    this.sound = sound;
  }
}

const items = [
  new Item (
    'March',
    require('./assets/images/march.jpg'),
    require('./assets/sounds/march.mp3')
  ),
  new Item (
    'Mist',
    require('./assets/images/mist.jpg'),
    require('./assets/sounds/mist.mp3')
  ),
  new Item (
    'Piano Man',
    require('./assets/images/pianoman.jpg'),
    require('./assets/sounds/pianoman.mp3')
  ),
  new Item (
    'Shopping',
    require('./assets/images/shop.jpg'),
    require('./assets/sounds/shop.mp3')
  ),
  new Item (
    'Starts',
    require('./assets/images/star.jpg'),
    require('./assets/sounds/star.mp3')
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
          <TouchableOpacity onPress={() => this.tappedRow({item})}>
            <ImageBackground
            source={item.image}
            style={{width: DEVICE_WIDTH, height: 150}}>
              <Text style={styles.cell_text}>{item.title}</Text>
            </ImageBackground>
          </TouchableOpacity>
        )}
        />
      </View>
    );
  }

  tappedRow(item) {
    console.log(item.item.title);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  cell_text: {
    height: '100%',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    fontStyle: 'italic',
    fontFamily: 'Baskerville',
    backgroundColor: 'transparent',
    textAlign: 'center'
  }
});
