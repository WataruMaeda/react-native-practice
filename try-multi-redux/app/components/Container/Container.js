import React from 'react';
import { View, StatusBar } from 'react-native'
import styles from './styles'

export default ({ children }) => (
    <View style={styles.container}>
        <StatusBar translucent={false} barStyle='light-content'/>
        { children }
    </View>
);