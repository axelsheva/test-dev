import User from '../models/users'
import News from '../models/news'

export const create = async (req, res, next) => {
  const newsData = req.body
  const userId = req.user._id

  newsData.userId = userId

  let news
  try {
    news = await News.create(newsData)
  } catch ({ message }) {
    return next({
      status: 400,
      message
    })
  }
  res.json(news)
}

export const get = async (req, res, next) => {
  const _id = req.params.id
  let news
  try {
    news = await News.findOne({ _id })
  } catch ({ message }) {
    return next({
      status: 500,
      message
    })
  }
  res.json(news)
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
    await News.updateOne({ _id }, body)
  } catch ({ message }) {
    return next({
      status: 500,
      message
    })
  }
  res.json({ message: 'success' })
}

export const remove = async (req, res, next) => {
  const _id = req.params.id
  if (req.user._id.toString() !== _id && !req.user.isAdmin)
    return next({
      status: 403,
      message: 'Permission denied'
    })
  const userId = req.user._id
  let news
  try {
    news = await News.findOne({ _id })
  } catch ({ message }) {
    return next({
      status: 500,
      message
    })
  }
  if (!news) {
    return next({
      status: 404,
      message: 'News not found'
    })
  }
  if (userId.toString() !== news.userId.toString() || !req.user.isAdmin) {
    return next({
      status: 403,
      message: 'Permission denied'
    })
  }
  try {
    news.remove()
  } catch ({ message }) {
    return next({
      status: 500,
      message
    })
  }
  res.json({ message: 'success' })
}

export const all = async (req, res, next) => {
  let news
  try {
    news = await News.find({})
  } catch ({ message }) {
    return next({
      status: 500,
      message
    })
  }
  res.json(news)
}
