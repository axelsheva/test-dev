import React, { PropTypes } from 'react'
import { Alert, Glyphicon } from 'react-bootstrap'

import News from './News'
import PaginationAdvanced from './PaginationAdvanced'

const NEWS_PER_PAGE = 15

const NewsList = ({ newsArray, searchString, activePage, pageChange }) => {
  activePage = activePage ? activePage : 1
  const newsArrayFiltered = newsArray.filter(news => news.title.toLowerCase().includes(searchString.toLowerCase()))
  const pages = Math.ceil(newsArrayFiltered.length / NEWS_PER_PAGE)
  const startOffset = (activePage - 1) * NEWS_PER_PAGE
  let startCount = 0

  const pagination = (
    <div className="text-center">
      <PaginationAdvanced
        items={pages}
        pageChange={pageChange}
        activePage={activePage} />
    </div>
  )

  const loadingAlert = (
    <Alert bsStyle="info">
      <Glyphicon glyph="refresh" /> Loading...
    </Alert>
  )

  const failedSearchAlert = (
    <Alert bsStyle="danger">
      Sorry, no results were found.
    </Alert>
  )

  return (
    <div>
      {newsArrayFiltered.map((news, index) => {
        if (index >= startOffset && startCount++ < NEWS_PER_PAGE)
          return <News key={index} news={news} />
        return false
      })}
      {pages ? pagination : searchString !== '' ? failedSearchAlert : loadingAlert}
    </div>
  )
}

NewsList.propTypes = {
  newsArray: PropTypes.array.isRequired,
  searchString: PropTypes.string.isRequired,
  activePage: PropTypes.number
}

export default NewsList
