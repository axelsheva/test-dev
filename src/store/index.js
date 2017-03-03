import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import persistState from 'redux-localstorage'

import reducer from '../reducers'

const middleware = applyMiddleware(thunk, promise())

const enhancer = persistState('auth')

export default function configureStore() {
  return createStore(reducer, composeWithDevTools(middleware), enhancer)
}
