
import React from 'react';
import { View, Text, FlatList, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { styles } from './style';
import { items } from '../models/model';

const image = require('../assets/icons/menu.png');

export default class SideMenu extends React.Component {
  _keyExtractor = (item, index) => item.title;

  static  navigationOptions = {
    title: 'Home',
    headerLeft: (
      <TouchableOpacity onPress={()=>this._tappedMenu}>
        <Image source={image} style={{width: 24, height: 24, margin: 10}}/>
      </TouchableOpacity>
    )
  }

  _tappedMenu() {
    
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          horizontal
          data={items}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderRow}
        />
      </View>
    );
  }

  _renderRow = ({item}) => {
    <Text style={styles.container}>{item.title}</Text>
  }
}