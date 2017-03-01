import React, { PropTypes } from 'react'
import { Pagination } from 'react-bootstrap'

const MAX_BUTTONS = 5

const PaginationAdvanced = ({ pageChange, items, activePage }) => {
  const handleSelect = (eventKey) => {
    if (activePage === eventKey) return
    pageChange(eventKey)
  }

  return (
    <Pagination
      prev
      next
      first
      last
      ellipsis
      boundaryLinks
      items={items}
      maxButtons={MAX_BUTTONS}
      activePage={activePage ? activePage : 1}
      onSelect={handleSelect} />
  )
}

PaginationAdvanced.propTypes = {
  items: PropTypes.number.isRequired,
  pageChange: PropTypes.func.isRequired,
  activePage: PropTypes.number
}

export default PaginationAdvanced
