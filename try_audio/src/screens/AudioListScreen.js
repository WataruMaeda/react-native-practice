import React from 'react';
import {
  Text,
  View,
  Button,
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
    title: 'Audio List'
  };

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
    const { navigate } = this.props.navigation;
    navigate('Audio');
  }
}