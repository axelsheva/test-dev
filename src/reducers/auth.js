import { AUTH } from '../constants/ActionTypes'

const initialState = {
  token: null,
  error: null,
  fetching: false,
  fetched: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case `${AUTH}_PENDING`:
      return {...state, fetching: true}
    case `${AUTH}_REJECTED`:
      return {...state, fetching: false, error: action.payload}
    case `${AUTH}_FULFILLED`:
      return {...state, fetching: false, fetched: true, token: action.payload.data}
    case 'LOGOUT':
      return initialState
    default:
      return state
  }
}
