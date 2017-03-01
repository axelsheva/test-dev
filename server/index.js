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

const app = express()

mongoose.Promise = bluebird
mongoose.connect(config.database, err => {
  if (err) throw err
  console.log('Mongo connected')
  app.listen(config.port, err => {
    if (err) throw err
    console.log(`Server listening on port ${config.port}`)
  })
})

const MongoStore = connectMongo(session)
app.use(cookieParser())
app.use(session({
  secret: config.secret,
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  }),
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  }
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', authRoute)
app.use('/api', usersRoute)
app.use('/api', newsRoute)

app.use(errorHandler)
