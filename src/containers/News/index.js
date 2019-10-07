import React, { Component } from "react"
import { connect } from "react-redux"
import { Col } from 'antd'
import NewsItem from '../../components/NewsItem'
import SpinContainer from '../../components/SpinContainer'
import * as actions from '../../redux/actions/listNews'

class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  componentDidMount() {
    const { loadNews, data } = this.props
    loadNews(data)
  }
  render() {
    const { newsList } = this.props
    return (
      newsList && newsList.length
        ? newsList.map((dt, idx) =>
          <Col key={idx} className="mb-10" span={22} push={1} pull={1}>
            <NewsItem news={dt} />
          </Col>
        )
        : <SpinContainer />
    )
  }
}

const mapStateToProps = state => {
  const { everything, params } = state
  const { newsList } = everything
  const { data } = params
  return {
    newsList,
    data,
  }
}

export default connect(mapStateToProps, actions)(News)