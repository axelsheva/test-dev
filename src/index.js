import React from 'react'
import { render } from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'

import App from './containers/App'
import configureStore from './store'

const store = configureStore()

render(
  <App store={store} />,
  document.getElementById('root')
)
