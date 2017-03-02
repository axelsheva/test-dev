import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Panel, Row, Col } from 'react-bootstrap'

import { fetchNews, searchNews } from '../actions/News'

import Content from '../components/Content'
import Sidebar from '../components/Sidebar'
import NewsList from '../components/NewsList'

const Main = ({ news, onSearch, activePage, onPageChange, onFetchNews }) => {
  return (
    <Content>
      <Row>
        <Col xs={12} sm={4} md={3} lg={3}>
          <Panel>
            <Sidebar search={onSearch} />
          </Panel>
        </Col>
        <Col xs={12} sm={8} md={9} lg={9}>
          <Panel>
            <NewsList
              news={news}
              activePage={activePage}
              pageChange={onPageChange}
              fetchNews={onFetchNews} />
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
  onSearch: PropTypes.func.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onFetchNews: PropTypes.func.isRequired,
  activePage: PropTypes.number
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchNews: () => {
      dispatch(fetchNews())
    },
    onPageChange: (page) => {
      ownProps.router.push('/page/' + page)
    },
    onSearch: (value) => {
      const mainPath = '/'
      if (ownProps.router.location.pathname !== mainPath)
        ownProps.router.push(mainPath)
      dispatch(searchNews(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
