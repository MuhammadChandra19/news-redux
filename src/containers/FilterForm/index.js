import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'antd';
const { Search } = Input;

export default class FilterForm extends Component {
  render() {
    return (
      <Row style={{height: 'calc(95vh - 96px)'}} className="filter-field">
        <Col span={24}>
          <Search 
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: '100%' }}
          />
        </Col>
        <Col span={11}>
          <Button icon="appstore" >Category</Button>
        </Col>
        <Col span={11} push={2}>
          <Button icon="compass" >Country</Button>
        </Col>
      </Row>
    )
  }
}
