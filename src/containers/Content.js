import React from 'react'
import { Grid } from 'react-bootstrap'
import { connect } from 'react-redux'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Content = ({ children, loggedIn }) => {
  return (
    <div>
      <Header loggedIn={loggedIn} />
      <Grid>{children}</Grid>
      <Footer />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { auth } = state

  return {
    loggedIn: !!auth.token
  }
}

export default connect(mapStateToProps)(Content)
