import Users from '../models/users'

export async function getCurrentUser(req, res, next) {
  const session = req.session
  return res.json(session.user)
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
  if (!user) {
    return next({
      status: 404,
      message: 'User not found'
    })
  }
  res.json(user)
}

export async function put(req, res, next) {
  const _id = req.params.id
  const session = req.session
  if (session.user._id.toString() !== _id && !session.user.isAdmin)
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
  res.sendStatus(200)
}

export async function remove(req, res, next) {
  const session = req.session
  if (!session.user.isAdmin)
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
  res.sendStatus(200)
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
