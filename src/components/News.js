import React, { PropTypes } from 'react'
import { Panel } from 'react-bootstrap'

const News = ({ news }) => {
  return (
    <Panel className="news">
      <h4>{news.title}</h4>
      <div className="news-body">{news.body}</div>
    </Panel>
  )
}

News.propTypes = {
  news: PropTypes.object.isRequired
}

export default News
