import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux"
import { Row, Col, Button} from 'antd';
import * as actions from '../../redux/actions/params'


class SetFilter extends Component {

  onApply = async() => {
    const { setParams } = this.props
    await setParams()
    await this.props.history.goBack()
  }

  render() { 
    const { resetParams } = this.props
    return(
      <React.Fragment>
        <Row className="mt-15">
          <Col span={11}>
            <Button onClick={resetParams} icon="undo" style={{ width: '100%'}}>Reset</Button>
          </Col>
          <Col span={11} push={2}>
            <Button onClick={this.onApply} icon="search" style={{ width: '100%'}} type="primary">Apply</Button>
          </Col>
        </Row>
        
      </React.Fragment>

    )
  }
}
export default connect(null, actions)(withRouter(SetFilter))
