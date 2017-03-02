import React, { PropTypes } from 'react'

import Search from './Search'

const Sidebar = ({ search }) => {
  return (
    <Search search={search} />
  )
}

Sidebar.propTypes = {
  search: PropTypes.func.isRequired
}

export default Sidebar
