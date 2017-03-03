import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'

const Header = ({ loggedIn }) => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Brand</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      {loggedIn ? (
        <Nav pullRight>
          <LinkContainer to={{ pathname: '/logout' }}>
            <NavItem>LogOut</NavItem>
          </LinkContainer>
        </Nav>
      ) : (
        <Nav pullRight>
          <LinkContainer to={{ pathname: '/registration' }}>
            <NavItem>Registration</NavItem>
          </LinkContainer>
          <LinkContainer to={{ pathname: '/auth' }}>
            <NavItem>Auth</NavItem>
          </LinkContainer>
        </Nav>
      )}
    </Navbar.Collapse>
  </Navbar>
)

export default Header
