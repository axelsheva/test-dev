import * as UsersService from '../services/users'
import Users from '../models/users'

import checkAdmin from '../middlewares/checkAdmin'

export async function getCurrentUser(req, res, next) {
  const { token } = req

  let user
  try {
    user = await UsersService.getUserByToken(token)
  } catch ({ message }) {
    return next({
      status: 500,
      message
    })
  }
  return res.json(user)
}

export async function create(req, res, next) {
  const userData = req.body

  let user
  try {
    user = await Users.create(userData)
  } catch ({ message }) {
    return next({
      status: 400,
      message
    })
  }
  res.json(user)
}

export async function get(req, res, next) {
  const _id = req.params.id
  let user
  try {
    user = await Users.findOne({ _id })
  } catch ({ message }) {
    return next({
      status: 500,
      message
    })
  }
  res.json(user)
}

export async function put(req, res, next) {
  if (!checkAdmin(req.user))
    return next({
      status: 403,
      message: 'Forbidden'
    })

  const _id = req.params.id
  const body = req.body
  try {
    await Users.updateOne({ _id }, body)
  } catch ({ message }) {
    return next({
      status: 500,
      message
    })
  }
  res.json({ message: 'success' })
}

export async function remove(req, res, next) {
  if (!checkAdmin(req.user))
    return next({
      status: 403,
      message: 'Forbidden. No token!'
    })

  const _id = req.body.id
  let user
  try {
    user = await Users.findOne({ _id })
  } catch ({ message }) {
    return next({
      status: 500,
      message
    })
  }
  if (!user) {
    return next({
      status: 404,
      message: 'User not found'
    })
  }
  try {
    user.remove()
  } catch ({ message }) {
    return next({
      status: 500,
      message
    })
  }
  res.json({ message: 'success' })
}

export async function all(req, res, next) {
  let users
  try {
    users = await Users.find({})
  } catch ({ message }) {
    return next({
      status: 500,
      message
    })
  }
  res.json(users)
}
