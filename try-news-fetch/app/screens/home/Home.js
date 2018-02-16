import React from 'react';
import { Text, View, FlatList } from 'react-native';
import styles from './styles'

// component
import getFeedCard from '../../components/FeedListItem'

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
        return (
            <View style={styles.container}>
                <FlatList
                data={feeds}
                keyExtractor={(feed, index)=>feed.title}
                renderItem={(feed)=>getFeedCard(feed)}/>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { feeds: state.FeedManager.feeds, }
}

export default connect(mapStateToProps)(Home)