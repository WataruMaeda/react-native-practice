import React from 'react'
import { Text } from 'react-native'
import { Container } from '../components/Container'
import { CounterView } from '../components/CounterView'

export default () => {
  return (
    <Container>
      <CounterView />
      <CounterView />
      <CounterView />
    </Container>
  )
};