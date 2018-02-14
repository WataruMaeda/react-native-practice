import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native'
import styles from './styles'

// redux
import { connect } from 'react-redux'
import { updateName, updateAge, updatePhone } from '../redux/actions/UserAccount' 

class Home extends React.Component {
  render() {
    const {age, name, phone} = this.props

    return (
      <View style={styles.container}>
        <Text>Name: </Text>
        <TextInput style={styles.textInput} onChangeText={name => this.props.dispatch(updateName(name))} value={name}/>
        <Text>Age: </Text>
        <TextInput style={styles.textInput} onChangeText={age => this.props.dispatch(updateAge(age))} value={String(age)}/>
        <Text>Phone: </Text>
        <TextInput style={styles.textInput} onChangeText={phone => this.props.dispatch(updatePhone(phone))} value={String(phone)}/>
        <Text>Inpit result: { name + " " + age + " " + phone }</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.UserAccount.age,
    name: state.UserAccount.name,
    phone: state.UserAccount.phone,
  }
}
export default connect(mapStateToProps)(Home)