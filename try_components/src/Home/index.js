import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'
import SquireImage from '../Components/SquireImage'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Hello react home! </Text>
        <SquireImage url='https://cdn.pixabay.com/photo/2018/02/02/22/28/nature-3126513_960_720.jpg'/>
      </View>
    )
  }
}