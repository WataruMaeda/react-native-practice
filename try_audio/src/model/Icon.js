import { Dimensions } from 'react-native';
  
class Icon {
    constructor(image, width, height) {
        this.image = image;
        this.width = width;
        this.height = height;
    }
}
  
export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');

export const playIcon = new Icon(
    require('../assets/icons/btn_play.png'), 80, 80
);