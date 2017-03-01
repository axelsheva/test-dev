import React from 'react'

import Search from './Search'

const Sidebar = ({ onSearch }) => {
  return (
    <Search onSearch={onSearch} />
  )
}

export default Sidebar
