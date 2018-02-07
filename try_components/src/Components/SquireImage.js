import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

const SquireImage = (props) => {
    const { url, hello } = props;
    console.log(props);
    const { container, image } = styles;
    return (
        <View style={container}>
            <Image style={image} source={{url: url}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
        backgroundColor: 'red',
    },
    image: {
        width: 300,
        height: 300,
    }
});

export default SquireImage;