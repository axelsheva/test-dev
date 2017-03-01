import React, { PropTypes } from 'react'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'

import MainPage from './Main'
import RegPage from './Registration'
import AuthPage from './Auth'

const App = ({ store }) => (
  <Provider store={store}>
    <Router history={syncHistoryWithStore(hashHistory, store)}>
      <Route path="/" component={MainPage} />
      <Route path="/page/:id" component={MainPage} />
      <Route path="/registration" component={RegPage} />
      <Route path="/auth" component={AuthPage} />
    </Router>
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App
