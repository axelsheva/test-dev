import React, { PropTypes } from 'react'
import { Alert, Glyphicon } from 'react-bootstrap'

import PaginationAdvanced from './PaginationAdvanced'
import News from './News'

const NewsList = ({ news, activePage, pageChange, newsPerPage, fetchNews }) => {
  if (!news.fetched && !news.fetching && !news.error) fetchNews()

  const LoadingAlert = () => (
    <Alert bsStyle="info">
      <Glyphicon glyph="refresh" /> Loading...
    </Alert>
  )

  const ErrorAlert = () => (
    <Alert bsStyle="warning">
      {news.error.toString()}
    </Alert>
  )

  const FailedSearchAlert = () => (
    <Alert bsStyle="danger">
      Sorry, no results were found.
    </Alert>
  )

  if (news.fetching) return <LoadingAlert />
  if (news.error) return <ErrorAlert />

  activePage = activePage || 1
  newsPerPage = newsPerPage || 15

  const hasSearch = news.searchString !== ''
  const filteredNews = hasSearch ?
    news.data.filter(_news => _news.title.toLowerCase().includes(news.searchString.toLowerCase())) :
    news.data

  if (!filteredNews.length) return <FailedSearchAlert />

  const pageCount = Math.ceil(filteredNews.length / newsPerPage)
  const offset = (activePage - 1) * newsPerPage

  return (
    <div>
      {filteredNews.slice(offset, newsPerPage).map((news, index) => (
        <News key={index} news={news} />
      ))}
      <PaginationAdvanced
        items={pageCount}
        pageChange={pageChange}
        activePage={activePage} />
    </div>
  )
}

NewsList.propTypes = {
  news: PropTypes.object.isRequired,
  fetchNews: PropTypes.func.isRequired,
  activePage: PropTypes.number,
  newsPerPage: PropTypes.number,
  pageChange: PropTypes.func.isRequired
}

export default NewsList
