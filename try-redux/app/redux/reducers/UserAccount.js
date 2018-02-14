import * as types from '../types'

const initialState = {
    name: 'Input name',
    age: 20,
    phone: 7787511656,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case types.SAVE_NAME:
            return {
                ...state,
                name: action.payload
            }
        case types.SAVE_AGE:
            return {
                ...state,
                age: action.payload
            }
        case types.SAVE_PHONE:
            return {
                ...state,
                phone: action.payload
            }
        default:
            return state
    }
}