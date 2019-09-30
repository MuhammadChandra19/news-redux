import React, { Component } from 'react';
import { Row, Col, Button} from 'antd';

export default class SetFilter extends Component {
  render() {
    return(
      <div>
        <Row className="mt-15">
          <Col span={11}>
            <Button style={{ width: '100%'}}>Cancel</Button>
          </Col>
          <Col span={11} push={2}>
            <Button style={{ width: '100%'}} type="primary">Apply</Button>
          </Col>
        </Row>
      </div>

    )
  }
}
