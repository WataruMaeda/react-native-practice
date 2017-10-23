import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

class Item {
  constructor(index, title, subtitle) {
    this.index = index;
    this.title = title;
    this.subtitle = subtitle;
  }
}

const items = [
  new Item (
    0,
    'title-1',
    'subtitle-1'
  ),
  new Item (
    1,
    'title-2',
    'subtitle-2'
  ),
  new Item (
    2,
    'title-3',
    'subtitle-3'
  )
]

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
        data={items}
        keyExtractor={item => item.index}
        renderItem={({item})=>(<Text>{item.title}</Text>)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
