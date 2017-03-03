import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import bluebird from 'bluebird'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import connectMongo from 'connect-mongo'

import config from './config'
import authRoute from './routes/auth'
import usersRoute from './routes/users'
import newsRoute from './routes/news'
import errorHandler from './middlewares/errorHandler'
import allowCrossDomain from './middlewares/allowCrossDomain'

const app = express()

mongoose.Promise = bluebird
mongoose.connect(`${config.database.host}/${config.database.db}`, err => {
  if (err) throw err
  console.log('Mongo connected')
  app.listen(config.database.port, err => {
    if (err) throw err
    console.log(`Server listening on port ${config.database.port}`)
  })
})

const MongoStore = connectMongo(session)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cookieParser())
app.use(session({
  ...config.session,
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  })
}))

app.use(allowCrossDomain)
app.use('/api', authRoute)
app.use('/api', usersRoute)
app.use('/api', newsRoute)

app.use(errorHandler)
