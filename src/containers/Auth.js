import React, { Component } from 'react'
import { Panel, Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'

import Content from './Content'
import AuthForm from '../components/AuthForm'

import { signIn } from '../actions/Auth'

class Auth extends Component {
  componentWillMount = () => {
    this.props.checkAuth(this.props.isLoggedIn)
  }

  componentDidUpdate = () => {
    this.props.checkAuth(this.props.isLoggedIn)
  }

  render() {
    return (
      <Content>
        <Panel>
          <Row>
            <Col xs={12} smOffset={2} sm={8} mdOffset={3} md={6} lgOffset={3} lg={6}>
              <AuthForm handleSubmit={this.props.handleSubmit} authError={this.props.authError} />
            </Col>
          </Row>
        </Panel>
      </Content>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { auth } = state
  const authError = auth.error ? auth.error.response.data.message : null

  return {
    authError,
    isLoggedIn: !!auth.token
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (data) => {
      dispatch(signIn(data))
    },
    checkAuth: (isLoggedIn) => {
      if (isLoggedIn)
        ownProps.router.push('/')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
