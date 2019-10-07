import React, { Component } from 'react';
import { connect } from "react-redux"
import { Row, Col, Input, Button } from 'antd';
import * as actions from '../../redux/actions/params'
import Category from '../Category'
const { Search } = Input;

class FilterForm extends Component {
  render() {
    const  { preSetParams, preset } = this.props
    return (
      <Row style={{height: 'calc(95vh - 96px)'}} className="filter-field">
        <Col span={24}>
          <Search 
            placeholder="input search text"
            value={preset.q}
            onChange={e => preSetParams({q: e.target.value})}
            style={{ width: '100%' }}
          />
        </Col>
        <Col span={11}>
          <Category />
        </Col>
        <Col span={11} push={2}>
          <Button icon="compass" >Country</Button>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => {
  const { params } = state
  const { data, preset } = params
  return {
    data,
    preset
  }
}

export default connect(mapStateToProps, actions)(FilterForm)