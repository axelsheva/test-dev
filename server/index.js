import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import bluebird from 'bluebird'

import config from './config'
import authRoute from './routes/auth'
import usersRoute from './routes/users'
import newsRoute from './routes/news'
import errorHandler from './middlewares/errorHandler'
import checkToken from './middlewares/checkToken'
import getUser from './middlewares/getUser'

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

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', authRoute)
app.use(checkToken)
app.use(getUser)
app.use('/api', usersRoute)
app.use('/api', newsRoute)

app.use(errorHandler)
