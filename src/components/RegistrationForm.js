import React from 'react'
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap'

const RegistrationForm = ({ handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit} horizontal>
      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          Email
        </Col>
        <Col sm={10}>
          <FormControl name="email" type="email" placeholder="Email" />
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalPassword">
        <Col componentClass={ControlLabel} sm={2}>
          Password
        </Col>
        <Col sm={10}>
          <FormControl type="password" placeholder="Password" />
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
