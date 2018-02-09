import * as types from '../types'

const initialState = {
    counter2: 0,
} 

export default (state = initialState, action) => {
    switch(action.type) {
      case types.COUNTER_2:
        return {
          ...state,
          counter2: action.counter2
        };
  
      default:
        return state
    }
}