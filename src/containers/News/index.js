import React, { Component } from "react"
import { connect } from "react-redux"
import { Col } from 'antd'
import NewsItem from '../../components/NewsItem'
import * as actions from '../../redux/actions/listNews'

class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  componentDidMount() {
    const { loadNews } = this.props
    loadNews()
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
        : null
    )
  }
}

const mapStateToProps = state => {
  const { everything } = state
  const { newsList } = everything
  return {
    newsList
  }
}

export default connect(mapStateToProps, actions)(News)