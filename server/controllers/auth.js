import jwt from 'jsonwebtoken'

import Users from '../models/users'
import config from '../config'

export const signup = async (req, res, next) => {
  const data = req.body
  try {
    const user = await Users.create(data)
  } catch ({ message }) {
    return next({
      status: 400,
      message
    })
  }
  req.session = user
  res.sendStatus(200)
}

export const signin = async (req, res, next) => {
  const { username, password } = req.body
  const user = await Users.findOne({ username })
  if(!user) {
    return next({
      status: 400,
      message: 'User not found'
    })
  }
  try {
    await user.comparePasswords(password)
  } catch (e) {
    return next({
      status: 400,
      message: 'Bad data'
    })
  }
  req.session.user = user
  res.sendStatus(200)
}
