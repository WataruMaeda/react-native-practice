import * as types from '../types'

const initialState = {
    counter1: 0,
} 

export default (state = initialState, action) => {
    switch(action.type) {
      case types.COUNTER_1:
        return {
          ...state,
          counter1: action.counter1
        };
  
      default:
        return state
    }
}