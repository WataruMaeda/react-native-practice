
import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../screens/style';
import { playIcon } from '../model/Icon';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../action';
const Sound = require('react-native-sound');

class Audio extends React.Component {
    constructor() {
        super();
        this.state = {
            audioState: 'loading'
        }
    }

    componentDidMount() {
        Sound.setCategory('Playback');
        this.sound = new Sound(this.props.selectedItem.sound, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                this.setState({audioState: 'failed'});
                return;
            }
            this.setState({audioState: 'loaded'});
        });
    }

    componentWillUnmount() {
        this.sound.stop();
        this.sound.release();
    }

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

    _tappedPlay() {
        switch(this.state.audioState) {
            case 'loaded': { this._play(); break; }
            case 'playing': { this._pause(); break; }
            case 'paused': { this._play(); break;  }
            case 'finished': { this.setState({audioState: 'loaded'}); break; }
            case 'failed': { Alert.alert('Failed to load sound'); break; }
            default: break;
        }
    }

    _play() {
        this.setState({audioState: 'playing'});
        this.sound.play((success) => {       
            if (success) {
                this.setState({audioState: 'finished'});
                this._tappedPlay();
            }
          });
    }

    _pause() {
        this.setState({audioState: 'paused'});
        this.sound.pause();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Audio);