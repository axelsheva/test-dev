import React from 'react'
import { Grid } from 'react-bootstrap'

import Header from './Header'
import Footer from './Footer'

const Content = ({ children }) => {
  return (
    <div>
      <Header />
      <Grid>{children}</Grid>
      <Footer />
    </div>
  )
}

export default Content
