import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Hello react home! </Text>
      </View>
    )
  }
}