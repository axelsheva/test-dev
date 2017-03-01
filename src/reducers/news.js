import { FETCH_NEWS, CHANGE_SEARCH_NEWS_STRING } from '../constants/ActionTypes'

const initialState = {
  data: [],
  searchString: '',
  error: null,
  fetching: false,
  fetched: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_NEWS}_PENDING`:
      return {...state, fetching: true}
    case `${FETCH_NEWS}_REJECTED`:
      return {...state, fetching: false, error: action.payload}
    case `${FETCH_NEWS}_FULFILLED`:
      return {...state, fetching: false, fetched: true, data: action.payload.data}
    case CHANGE_SEARCH_NEWS_STRING:
      return {...state, searchString: action.payload}
    default:
      return state
  }
}
