import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class LinkText extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={()=>{this.props.callback()}}>
          <Text> {this.props.text} </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default LinkText;