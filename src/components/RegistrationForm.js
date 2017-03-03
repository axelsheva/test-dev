import React from 'react'
import { Form, FormGroup, Col, ControlLabel, Button } from 'react-bootstrap'

const RegistrationForm = ({ handleSubmit }) => {
  let usernameInput
  let passwordInput

  const onSubmit = (e) => {
    e.preventDefault()
    handleSubmit({
      username: usernameInput.value,
      password: passwordInput.value
    })
  }

  return (
    <Form onSubmit={onSubmit} horizontal>
      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          Username
        </Col>
        <Col sm={10}>
          <input className="form-control" name="username" type="text" placeholder="Username" ref={(input) => {usernameInput = input}} />
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalPassword">
        <Col componentClass={ControlLabel} sm={2}>
          Password
        </Col>
        <Col sm={10}>
          <input className="form-control" type="password" placeholder="Password" ref={(input) => {passwordInput = input}} />
        </Col>
      </FormGroup>
      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button type="submit">
            Sign up
          </Button>
        </Col>
      </FormGroup>
    </Form>
  )
}

export default RegistrationForm
