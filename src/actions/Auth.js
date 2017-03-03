import axios from 'axios'

import { AUTH, LOGOUT } from '../constants/ActionTypes'
import { API } from '../constants'

export const signIn = (data) => {
  return dispatch => {
    dispatch({
      type: AUTH,
      payload: axios.post(API.signIn, data, { withCredentials: true })
    })
  }
}

export const signUp = (data) => {
  return dispatch => {
    dispatch({
      type: AUTH,
      payload: axios.post(API.signUp, data, { withCredentials: true })
    })
  }
}

export const logOut = () => {
  return dispatch => {
    dispatch({ type: LOGOUT })
  }
}
