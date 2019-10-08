import React from 'react'
import { Row, Col } from 'antd'
const Country = ({list}) => (
  <div className="country__container mb-10">
    <Row>
      <Col span={6}>
        <img alt={`${list.name} flag`} src={list.img} />
      </Col>
      <Col span={14}>
        <div className="country__detail">
          <p><strong>{list.name}</strong></p>
          <kbd>{list.id}</kbd>
        </div>
        
      </Col>
    </Row>
  </div>
)

export default Country