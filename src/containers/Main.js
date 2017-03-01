import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Panel, Row, Col } from 'react-bootstrap'

import { fetchNews, searchNews } from '../actions/News'

import Content from '../components/Content'
import Sidebar from '../components/Sidebar'
import NewsList from '../components/NewsList'

const Main = ({ news, changeSearchString, activePage, pageChange }) => {
  return (
    <Content>
      <Row>
        <Col xs={12} sm={4} md={3} lg={3}>
          <Panel>
            <Sidebar onSearch={changeSearchString} />
          </Panel>
        </Col>
        <Col xs={12} sm={8} md={9} lg={9}>
          <Panel>
            <NewsList
              newsArray={news.data}
              searchString={news.searchString}
              activePage={activePage}
              pageChange={pageChange} />
          </Panel>
        </Col>
      </Row>
    </Content>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { news } = state,
    activePage = Number(ownProps.params.id) || 1

  return {
    activePage,
    news
  }
}

Main.propTypes = {
  news: PropTypes.object.isRequired,
  changeSearchString: PropTypes.func.isRequired,
  pageChange: PropTypes.func.isRequired,
  activePage: PropTypes.number
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchNews: () => {
      dispatch(fetchNews())
    },
    pageChange: (page) => {
      ownProps.router.push('/page/' + page)
    },
    changeSearchString: (searchString) => {
      if (ownProps.location.pathname !== '/')
        ownProps.router.push('/')
      dispatch(searchNews(searchString))
    }
  }
}

const mergeProps = (state, dispatch) => {
  if (!state.news.data.length && !state.news.fetching && !state.news.error)
    dispatch.fetchNews()

  return Object.assign(state, {...dispatch, fetchNews: null})
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Main)
