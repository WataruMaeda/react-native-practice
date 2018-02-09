import { combineReducers } from 'redux'

import counterFirst from './counterFirst'
import counterSecond from './counterSecond'

export default combineReducers({
  counterFirst, counterSecond,
})