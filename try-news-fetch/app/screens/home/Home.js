import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles'

// redux
import { connect } from 'react-redux'
import { updateFeeds } from '../../redux/actions/feedManager'

class Home extends React.Component {
    render() {
        const { feeds } = this.props
        return (
          <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
          </View>
        );
      }
}

const mapStateToProps = state => {
    return {
        feeds: state.FeedManager.feeds,
    }
}

export default connect(mapStateToProps)(Home)