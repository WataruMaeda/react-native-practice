import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default () => {
  return (
    <View style={styles.shadowView}>
      <View style={styles.counterView}>
        <View style={styles.counterTextView}>
          <Text style={styles.counterText}>0</Text>
        </View>
      </View>
    </View>
  )
}