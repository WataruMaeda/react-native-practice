import * as types from '../types'
import { getFeeds } from '../../utils/api'
import { saveFeeds } from '../../components/StorageManager'

export const updateFeeds = () => {
    return dispatch => {
         getFeeds().then(res => {
            dispatch({type: types.UPDATE_FEEDS, payload: res})
            saveFeeds(res)
         })
    }
}
