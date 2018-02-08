import { StyleSheet, Dimensions } from 'react-native'
const COUNTER_VIEW_WIDTH = Dimensions.get('window').width - 20
const COUNTER_VIEW_HEIGHT = Dimensions.get('window').height / 3 - 60

export default StyleSheet.create({
    counterView: {
        width: COUNTER_VIEW_WIDTH,
        height: COUNTER_VIEW_HEIGHT,
        backgroundColor: 'red',
        borderRadius: 10,
        overflow: 'hidden',
        margin: 10,
    },
    counterTextView: {
        width: COUNTER_VIEW_WIDTH,
        height: COUNTER_VIEW_HEIGHT / 2,
        backgroundColor: 'white',
        justifyContent: 'center', 
        alignItems: 'center',
    },
    counterText: {
        backgroundColor: 'transparent',
        color: '#34495e',
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 60,
    }
})