import * as types from '../types'

export const updateFeeds = feeds => {
    return dispatch => {
        dispatch({type: types.UPDATE_FEEDS, payload: feeds})
    }
}