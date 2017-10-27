import {
    StyleSheet
  } from 'react-native';

import { Icon, DEVICE_HEIGHT, DEVICE_WIDTH, NAVI_BUTTON_RIGHT } from '../model/Icon';
import { items } from '../model/Item';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    naviagtion_title: {
      fontSize: 20,
      fontWeight: 'bold',
      fontStyle: 'italic',
      fontFamily: 'Baskerville'
    },
    navigation_button: {
      width: NAVI_BUTTON_RIGHT.width,
      height: NAVI_BUTTON_RIGHT.height,
      marginLeft: 20,
      marginBottom: 10
    },
    cell_background_image: {
      width: DEVICE_WIDTH,
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cell_text: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      fontStyle: 'italic',
      fontFamily: 'Baskerville',
      backgroundColor: 'transparent',
      alignItems: 'center',
    }
  });