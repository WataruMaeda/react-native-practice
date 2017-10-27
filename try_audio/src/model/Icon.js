import { Dimensions } from 'react-native';
  
export class Icon {
    constructor(image, width, height) {
        this.image = image;
        this.width = width;
        this.height = height;
    }
}
  
export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');
export const NAVI_BUTTON_RIGHT = new Icon(
    require('../assets/icons/side_menu_toggle_button.png'), 25, 25
);