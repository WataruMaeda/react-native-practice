import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { Icon, DEVICE_HEIGHT, DEVICE_WIDTH, NAVI_BUTTON_RIGHT } from '../model/Icon';
import { items } from '../model/Item';
import { styles } from '../screens/style';

export default class AudioListScreen extends React.Component {
  _keyExtractor = (item, index) => item.title;

  static navigationOptions = {
    title: (<Text style={styles.naviagtion_title}>Audio List</Text>)
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList
        data={items}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderRow.bind(this)}
        />
      </View>
    );
  }

  _renderRow = ({item}) => (
    <TouchableOpacity onPress={()=>this._tappedRow({item})}>
      <ImageBackground
      source={item.image}
      style={styles.cell_background_image}>
        <Text style={styles.cell_text}>{item.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );

  _tappedRow({item}) {
    console.log(item.title);
  }
}