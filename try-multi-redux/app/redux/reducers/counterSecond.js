import * as types from '../types'

const initialState = {
  number: 0,
} 

export default (state = initialState, action) => {
    switch(action.type) {
      case types.COUNTER_SECOND:
        return {
          ...state,
          number: action.number
        };
  
      default:
        return state
    }
}