import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'

export default () => {
  return (
    <View style={styles.shadowView}>
      <View style={styles.counterView}>
        <View style={styles.counterTextView}>
          <Text style={styles.counterText}>0</Text>
        </View>
        <View style={styles.controllerView}>
          <TouchableOpacity onPress={pressedAdd}> 
            <Image style={styles.image} source={require('./assets/add.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={pressedDelete}> 
          <Image style={styles.image} source={require('./assets/delete.png')}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )

  const pressedAdd = () => {

  }

  const pressedDelete = () => {

  }
}