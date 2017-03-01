import React, { PropTypes } from 'react'
import { Panel } from 'react-bootstrap'

const News = ({ news }) => {
  return (
    <Panel className="news">
      <h4>{news.title}</h4>
      {news.body.split(/\\r\\n|\\r|\\n/g).map((line, index) => {
        return <p key={index}>{line}</p>
      })}
    </Panel>
  )
}

News.propTypes = {
  news: PropTypes.object.isRequired
}

export default News
