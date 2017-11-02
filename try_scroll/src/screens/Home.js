
import React from 'react';

// Components
import { View, Text, FlatList, ImageBackground, Image, TouchableOpacity, Button } from 'react-native'
import { styles } from './style';
import { items } from '../models/model';

// Redux
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../action';

// Drawer
import SideMenu from 'react-native-side-menu';
import Drawer from './Drawer';

// Const
const image = require('../assets/icons/menu.png');

class Home extends React.Component {
  _keyExtractor = (item, index) => item.title;

  componentDidMount() {
    this.props.updateSelectedItem(items[0]);
  }

  render() {
    return (
      <SideMenu
        menu={<Drawer/>}
        isOpen={this.props.drawerState.isOpen}
        onChange={isOpen => this._changedDrawerState(isOpen)}>
        <View style={styles.container}>
          <Button title={'Show Menu'} onPress={()=>this._toggleDrawer()}/>
          <FlatList
            horizontal
            pagingEnabled
            data={items}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderRow}
          />
        </View>
      </SideMenu>
    );
  }

  /* Drawer functions */
  _toggleDrawer = () => {
    let drState = {isOpen: !this.props.drawerState.isOpen, selectedItem: ''};
    this.props.updateDrawerState(drState);
  }

  _changedDrawerState(isOpen) {
    console.log(isOpen);
  }

  /* Flat List funcs */
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
    this.props.updateSelectedItem(item);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);