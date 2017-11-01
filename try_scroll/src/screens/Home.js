
import React from 'react';
import { View, Text, FlatList, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { styles } from './style';
import { items } from '../models/model';

const image = require('../assets/icons/menu.png');

export default class Home extends React.Component {
  _keyExtractor = (item, index) => item.title;

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          horizontal
          pagingEnabled
          data={items}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderRow}
        />
      </View>
    );
  }

  _renderRow = ({item}) => (
    <ImageBackground
      style={styles.cell_background_image}
      source={{uri: item.image}}>
      <Text style={styles.cell_text}>{item.title}</Text>
    </ImageBackground>
  );
}