
import React from 'react';

// Components
import { View, Text, FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import { styles } from './style';
import { items } from '../models/model';

// Redux
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../action';

class Drawer extends React.Component {
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
    <TouchableOpacity
      onPress={()=>this._tappedRow(item)}>
      <ImageBackground
        style={[styles.cell_background_image, {height: 200}]}
        source={{uri: item.image}}>
        <Text style={styles.cell_text}>{item.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );

  _tappedRow(item) {
    this.props.updateSelectedItem(item);
    let drState = {isOpen: false, selectedItem: ''};
    this.props.updateDrawerState(drState);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);