import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import reducer from '../reducers'

const middleware = applyMiddleware(thunk, promise())

export default function configureStore() {
  return createStore(reducer, composeWithDevTools(middleware))
}
