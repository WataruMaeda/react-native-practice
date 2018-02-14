import * as types from '../types'

const initialState = {
    name: '',
    age: 0,
    phone: 0,
}

export default (state = initialState, action) => {
    switch(action.types) {
        case types.SAVE_NAME:
            return {
                ...state,
                name: action.name
            }
        case types.SAVE_AGE:
            return {
                ...state,
                age: action.age
            }
        case types.SAVW_PHONE:
            return {
                ...state,
                phone: action.age
            }
        default:
            return state
    }
}