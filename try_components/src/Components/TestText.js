import React, { Component } from 'react'
import { Text } from 'react-native'

const TestText = (props) => {
    const { param1, param2 } = props;
    return (
        <Text>{param1} {param2} text passed!</Text>
    );
}

export default TestText;