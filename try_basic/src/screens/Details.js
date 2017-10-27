
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../style';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../action';

class Details extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.button_text}>{this.props.}</Text>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);