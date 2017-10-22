import React from 'react';
import { FlatList ,StyleSheet, Text, View } from 'react-native';

class Item {
  constructor(name, imagePath, soundPath) {
    this.name = name;
    this.imagePath = imagePath;
    this.soundPath = soundPath;
  }
}

const items = [
  new Item(
    "Book",
    require(".assets/images/book.jpg"),
    require(".assets/sounds/book.mp3"),
  ),
  new Item(
    "Cat",
    require(".assets/images/cat.jpg"),
    require(".assets/sounds/cat.mp3"),
  ),
  new Item(
    "Farewell",
    require(".assets/images/farewell.jpg"),
    require(".assets/sounds/farewell.mp3"),
  ),
  new Item(
    "Feel",
    require(".assets/images/feel.jpg"),
    require(".assets/sounds/feel.mp3"),
  ),
  new Item(
    "Horror",
    require(".assets/images/horror.jpg"),
    require(".assets/sounds/horror.mp3"),
  )
]

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList>

        </FlatList>
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
