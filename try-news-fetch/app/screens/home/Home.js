import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles'

// redux
import { connect } from 'react-redux'
import { updateFeeds } from '../../redux/actions/feedManager'

class Home extends React.Component {
    componentWillMount() {
        console.log(this.props)
        const {dispatch} = this.props
        dispatch(updateFeeds())
    }

    render() {
        const { feeds } = this.props
        const renderfeeds = feeds.map((feed, i)=> <View key={i}><Text>{feed.title}</Text></View>)
        return (
            <View>
            {renderfeeds}
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