
import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { styles } from '../screens/style';
import { playIcon } from '../model/Icon';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../action';

class Audio extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                source={this.props.selectedItem.image}
                style={styles.background_image}>
                    <TouchableOpacity onPress={this._tappedPlay.bind(this)}>
                        <Image
                            source={playIcon.image}
                            style={{width: playIcon.width, height: playIcon.height}}/>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }

    _tappedPlay(e) {
        console.log(e);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Audio);