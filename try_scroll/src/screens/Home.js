
import React from 'react';
import { View, Text, FlatList, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { styles } from './style';
import { items } from '../models/model';

// Redux
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../action';

// Side Menu
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';

class Home extends React.Component {
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
    <TouchableOpacity
      onPress={()=>this._tappedRow(item)}>
      <ImageBackground
        style={styles.cell_background_image}
        source={{uri: item.image}}>
        <Text style={styles.cell_text}>{item.title}</Text>
    </ImageBackground>
    </TouchableOpacity>
  );

  _tappedRow(item) {
    console.log(item.title);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);