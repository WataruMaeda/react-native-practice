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
import { items } from '../model/Item';
import { styles } from '../screens/style';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../action';

class AudioListScreen extends React.Component {
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
    this.props.updateSelectedItem(item);
    const { navigate } = this.props.navigation;
    navigate('Audio');
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioListScreen);