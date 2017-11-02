
import React from 'react';
import { View, Text, FlatList, ImageBackground } from 'react-native'
import { styles } from './style';
import { items } from '../models/model';

export default class Menu extends React.Component {
  _keyExtractor = (item, index) => item.title;
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={items}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderRow}
        />
      </View>
    );
  }

  _renderRow = ({item}) => {
    <Text>{item.title}</Text>
  }
}