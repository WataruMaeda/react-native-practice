import { AsyncStorage } from 'react-native' 
import * as types from './types'

export const saveFeeds = async (feeds) => {
    try {
        let jsonFeeds = JSON.stringify(feeds)
        const result = await AsyncStorage.setItem(types.FEED_STORE, jsonFeeds)
        result === null ? 
            console.log('Save success!') : 
            console.log('Save failed!', result)
    } catch(error) {
        console.log(error)
    }
}

export const getFeeds = () => {
    try {
        const result = AsyncStorage.getItem(types.FEED_STORE)
        if (result !== nul) {
            console.log('fetch success!', result)
            return JSON.parse(result)
        }
    } catch(error) {
        console.log(error)
    }
}