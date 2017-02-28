import User from '../models/users'
import News from '../models/news'

import checkAdmin from '../middlewares/checkAdmin'

export async function create(req, res, next) {
  if (!req.user) {
    return next({
      status: 403,
      message: 'Forbidden. No token!'
    })
  }

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

export async function get(req, res, next) {
  const id = req.params.id
  let news
  try {
    news = await News.findOne({ id })
  } catch ({ message }) {
    return next({
      status: 500,
      message
    })
  }
  res.json(news)
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
    await News.updateOne({ _id }, body)
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

  const _id = req.params.id
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
  if (userId.toString() !== news.userId.toString()) {
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

export async function all(req, res, next) {
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
