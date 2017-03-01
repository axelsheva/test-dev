import React, { PropTypes } from 'react'

import News from './News'

const NewsList = ({ newsArray, searchString }) => {
  const newsArrayFiltered = newsArray.filter(news => news.title.toLowerCase().includes(searchString.toLowerCase()))

  return (
    <div>
      {newsArrayFiltered.map((news, index) => {
        return <News key={index} news={news} />
      })}
    </div>
  )
}

NewsList.propTypes = {
  newsArray: PropTypes.array.isRequired,
  searchString: PropTypes.string.isRequired
}

export default NewsList
