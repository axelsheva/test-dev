import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import news from './news'
import auth from './auth'

export default combineReducers({
  routing: routerReducer,
  news,
  auth
})
