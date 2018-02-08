import * as types from '../type'

const initialState = {
    counter_1: 0
} 

export default function reducer(state = initialState, action) {
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