import * as types from '../types'
import { getTechFeeds } from '../../utils/api'
import { saveTechFeeds } from '../../components/StorageManager'

export const updateTechFeeds = () => {
    return dispatch => {
        getTechFeeds().then(response => {
            dispatch({type: types.UPDATE_FEEDS, payload: response})
            saveTechFeeds(response)
         })
    }
}
