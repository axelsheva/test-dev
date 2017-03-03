import jwt from 'jsonwebtoken'

import config from '../config'
import Users from '../models/users'

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
  req.session.userId = user._id
  const token = jwt.sign({ _id: user._id }, config.session.secret)
  res.json(token)
}

export const signin = async (req, res, next) => {
  const { username, password } = req.body
  const user = await Users.findOne({ username })
  if(!user) {
    return next({
      status: 404,
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
  req.session.userId = user._id
  const token = jwt.sign({ _id: user._id }, config.session.secret)
  res.json(token)
}
