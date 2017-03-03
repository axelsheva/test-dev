import config from '../config'

export default async (req, res, next) => {
  res.header('Access-Control-Allow-Origin', `${config.allowDomain.siteUrl}`)
  res.header('Access-Control-Allow-Methods', `${config.allowDomain.methods}`)
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Headers', `${config.allowDomain.headers}`)
  next()
}
