import { Image } from 'react-native';

class Item {
    constructor(title, image, sound) {
      this.title = title;
      this.image = image;
      this.sound = sound;
    }
  }

export const items = [
    new Item (
      'March',
      require('../assets/images/march.jpg'),
      'march.mp3'
    ),
    new Item (
      'Mist',
      require('../assets/images/mist.jpg'),
      'mist.mp3'
    ),
    new Item (
      'Piano Man',
      require('../assets/images/pianoman.jpg'),
      'pianoman.mp3'
    ),
    new Item (
      'Shopping',
      require('../assets/images/shop.jpg'),
      'shop.mp3'
    ),
    new Item (
      'Starts',
      require('../assets/images/star.jpg'),
      'star.mp3'
    )
  ]