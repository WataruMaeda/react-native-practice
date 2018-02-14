import * as types from '../types'

const updateName = name => {
    return dispatch => {
        dispatch({type: types.SAVE_NAME, payload: name})
    }
}

const updateAge = age => {
    return dispatch => {
        dispatch({type: types.SAVE_AGE, payload: age})
    }
}

const updatePhone = phone => {
    return dispatch => {
        dispatch({type: types.SAVE_PHONE, payload: phone})
    }
}

export {updateName, updateAge, updatePhone}