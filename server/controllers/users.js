import * as UsersService from '../services/users'
import Users from '../models/users'

export const getCurrentUser = async (req, res, next) => {
  const { user } = req
  return res.json(user)
}

export const create = async (req, res, next) => {
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

export const get = async (req, res, next) => {
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

export const put = async (req, res, next) => {
  const _id = req.params.id
  if (req.user._id.toString() !== _id && !req.user.isAdmin)
    return next({
      status: 403,
      message: 'Permission denied'
    })
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

export const remove = async (req, res, next) => {
  if (!req.user.isAdmin)
    return next({
      status: 403,
      message: 'Permission denied'
    })
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

export const all = async (req, res, next) => {
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
