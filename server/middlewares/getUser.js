import * as UsersService from '../services/users'

export default async (req, res, next) => {
  const { token } = req

  if (token == null)
    return next()

  let user
  try {
    user = await UsersService.getUserByToken(token)
  } catch ({ message }) {
    return next()
  }
  req.user = user
  next()
}
