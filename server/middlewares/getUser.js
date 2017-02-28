import * as UserService from '../services/users'

export default async (req, res, next) => {
  const { token } = req
  let user
  try {
    user = await UserService.getUserByToken(token)
  } catch ({ message }) {
    req.user = null
    return next({
      status: 500,
      message
    })
  }
  req.user = user
  next()
}
