import { StyleSheet, Dimensions } from 'react-native'
const COUNTER_VIEW_WIDTH = Dimensions.get('window').width - 20
const COUNTER_VIEW_HEIGHT = Dimensions.get('window').height / 3 - 60

export default StyleSheet.create({
    shadowView: {
        backgroundColor: 'transparent',
        width: COUNTER_VIEW_WIDTH,
        height: COUNTER_VIEW_HEIGHT,
        shadowColor: 'darkgray',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 10,
        margin: 10,
    },
    counterView: {
        flex: 1,
        backgroundColor: '#e74b3c',
        overflow: 'hidden',
        borderRadius: 10,
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