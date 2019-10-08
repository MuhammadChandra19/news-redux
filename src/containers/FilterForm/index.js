import React, { Component } from 'react';
import { connect } from "react-redux"
import { Row, Col, Input, Button } from 'antd';
import * as actions from '../../redux/actions/params'
import * as commons from '../../redux/actions/common'
import { bindActionCreators } from 'redux'
import Countries from '../Countries'
import Category from '../Category'
const { Search } = Input;

class FilterForm extends Component {
  render() {
    const  { preSetParams, preset, setVisible } = this.props
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
          <Button onClick={() => setVisible({countryDrawer: true})} icon="compass" >Country</Button>
        </Col>
        <Countries />
      </Row>
      
    )
  }
}

const mapStateToProps = state => {
  const { params, common } = state
  const { data, preset } = params
  const { visible } = common
  return {
    data,
    preset,
    visible
  }
}

const mapDispatchToProps = dispatch => {
  return {
   ...bindActionCreators(actions, dispatch),
   ...bindActionCreators(commons, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm)