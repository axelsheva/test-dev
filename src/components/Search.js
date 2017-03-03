import React, { PropTypes } from 'react'
import { FormGroup, InputGroup, Button, Glyphicon } from 'react-bootstrap'

const Search = ({ search }) => {
  let searchInput

  const btnClick = () => {
    search(searchInput.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    btnClick()
  }

  return (
    <form onSubmit={onSubmit}>
      <FormGroup>
        <InputGroup>
          <input type="text" placeholder="Search..." className="form-control" ref={(input) => {searchInput = input}} />
          <InputGroup.Button>
            <Button onClick={btnClick}>
              <Glyphicon glyph="search" />
            </Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
    </form>
  )
}

Search.propTypes = {
  search: PropTypes.func.isRequired
}

export default Search
