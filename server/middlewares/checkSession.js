export default async (req, res, next) => {
  const session = req.session
  if (!session)
    return next({
      status: 403,
      message: 'Permission denied'
    })
  next()
}
