
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../style';

import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../action';

class Details extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.alert_message}</Text>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);