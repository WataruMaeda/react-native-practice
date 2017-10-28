
import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { styles } from '../screens/style';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../action';

class Audio extends React.Component {
    render() {
        console.log(this.props.selectedItem);
        return (
            <View style={styles.container}>
                <ImageBackground
                source={this.props.selectedItem.image}
                style={styles.cell_background_image}>
                    <Text>{this.props.selectedItem.title}</Text>
                </ImageBackground>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Audio);