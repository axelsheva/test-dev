import axios from 'axios'

import { FETCH_NEWS, CHANGE_SEARCH_NEWS_STRING } from '../constants/ActionTypes'
import { API } from '../constants'

export const fetchNews = () => {
  return dispatch => {
    dispatch({
      type: FETCH_NEWS,
      payload: axios.get(API.news, { withCredentials: true })
    })
  }
}

export const searchNews = (searchString) => {
  return dispatch => {
    dispatch({
      type: CHANGE_SEARCH_NEWS_STRING,
      payload: searchString
    })
  }
}
