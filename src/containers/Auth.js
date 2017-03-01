import React from 'react'
import { Panel, Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'

import Content from '../components/Content'
import AuthForm from '../components/AuthForm'

const Auth = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Content>
      <Panel>
        <Row>
          <Col xs={12} smOffset={2} sm={8} mdOffset={3} md={6} lgOffset={3} lg={6}>
            <AuthForm onSubmit={handleSubmit} />
          </Col>
        </Row>
      </Panel>
    </Content>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
