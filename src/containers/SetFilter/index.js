import React, { Component } from 'react';
import { connect } from "react-redux"
import * as actions from '../../redux/actions/params'
import { Row, Col, Button} from 'antd';

class SetFilter extends Component {
  render() { 
    const { setParams } = this.props
    return(
      <div>
        <Row className="mt-15">
          <Col span={11}>
            <Button style={{ width: '100%'}}>Cancel</Button>
          </Col>
          <Col span={11} push={2}>
            <Button onClick={setParams} style={{ width: '100%'}} type="primary">Apply</Button>
          </Col>
        </Row>
      </div>

    )
  }
}
export default connect(null, actions)(SetFilter)
