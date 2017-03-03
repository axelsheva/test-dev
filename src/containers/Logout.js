import { Component } from 'react'
import { connect } from 'react-redux'

import { logOut } from '../actions/Auth'

class Logout extends Component {
  componentWillMount() {
    this.props.dispatch(logOut())
    this.props.router.push('/')
  }

  render() {
    return null
  }
}

export default connect()(Logout)
