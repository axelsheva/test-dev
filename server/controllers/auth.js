import jwt from 'jsonwebtoken'

import Users from '../models/users'
import config from '../config'

export const signup = async (req, res, next) => {
  const data = req.body
  let user
  try {
    user = await Users.create(data);
  } catch ({ message }) {
    return next({
      status: 400,
      message
    })
  }
  res.json(user)
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
    const result = await user.comparePasswords(password)
  } catch (e) {
    return next({
      status: 400,
      message: 'Bad data'
    })
  }
  const token = jwt.sign({ _id: user._id }, config.secret)
  res.json(token)
}
