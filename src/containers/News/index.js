import React, { Component } from "react"
import { connect } from "react-redux"
import { Col } from 'antd'
import { bindActionCreators } from 'redux'
import NewsItem from '../../components/NewsItem'
import SpinContainer from '../../components/SpinContainer'
import * as common from '../../redux/actions/common'
import * as actions from '../../redux/actions/listNews'

class News extends Component {

  async componentDidMount() {
    const { setVisible } = this.props
    await setVisible({ loadNews: true })
    await this.loadData()
    await setVisible({ loadNews: false })
  }

  loadData = async () => {
    const { loadNews, data } = this.props
    await loadNews(data)
  }

  render() {
    const { newsList, visible } = this.props
    return (
      !visible.loadNews ? (
        newsList && newsList.length
        && newsList.map((dt, idx) =>
          <Col key={idx} className="mb-10" span={22} push={1} pull={1}>
            <NewsItem news={dt} />
          </Col>
        )
      ) : (<SpinContainer />)
    )
  }
}

const mapStateToProps = state => {
  const { everything, params, common } = state
  const { newsList } = everything
  const { visible } = common
  const { data } = params
  return {
    newsList,
    data,
    visible
  }
}

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(actions, dispatch),
    ...bindActionCreators(common, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(News)