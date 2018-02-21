import { AsyncStorage } from 'react-native' 
import * as types from './types'

export const saveFeeds = async (feeds) => {
    try {
        let jsonFeeds = JSON.stringify(feeds)
        const result = await AsyncStorage.setItem(types.FEED_STORE, jsonFeeds)
        result === null ? 
            console.log('Save feeds success!') : 
            console.log('Save feeds failed!', result)
    } catch(error) {
        console.log('save feeds failed!', error)
    }
}

export const getFeeds = () => {
    try {
        const result = AsyncStorage.getItem(types.FEED_STORE)
        if (result !== nul) {
            console.log('get storage feeds success!', result)
            return JSON.parse(result)
        }
    } catch(error) {
        console.log('get storage feeds failed', error)
    }
}