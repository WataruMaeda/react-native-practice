import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import { Container } from '../components/Container';

class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle='light-content'/>
        <Text> textInComponent </Text>
      </Container>
    )
  }
};
export default Home;
