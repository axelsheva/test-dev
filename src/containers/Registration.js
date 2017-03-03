import React, { Component } from 'react'
import { Panel, Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'

import Content from './Content'
import RegistrationForm from '../components/RegistrationForm'

import { signUp } from '../actions/Auth'

class Registration extends Component {
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
              <RegistrationForm handleSubmit={this.props.handleSubmit} />
            </Col>
          </Row>
        </Panel>
      </Content>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { auth } = state

  return {
    isLoggedIn: !!auth.token
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (data) => {
      dispatch(signUp(data))
    },
    checkAuth: (isLoggedIn) => {
      if (isLoggedIn)
        ownProps.router.push('/')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)
