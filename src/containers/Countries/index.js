import React, { Component } from 'react'
import * as actions from '../../redux/actions/common'
import { Drawer } from 'antd'
import { connect } from "react-redux"
import Country from '../../components/Country'
import '../../styles/containers/_countries.css'

class Countries extends Component {
  onClose = () => {
    const { setVisible } = this.props
    setVisible( {countryDrawer: false})
  }
  render() {
    const { country, visible } = this.props
    return (
      <Drawer
        title="Choose country"
        placement="right"
        onClose={this.onClose}
        closable={false}
        visible={ visible.countryDrawer !== undefined ? visible.countryDrawer : false}
      >
        <div className="country-list">
          {
            country.map((dt, i) => 
              <Country key={i} list={dt}/>
            )
          }
          
        </div>
      </Drawer>

    )
  }
}

const mapStateToProps = state => {
  const { params, common } = state
  const { country } = params
  const { visible } = common
  return {
    country,
    visible
  }
}
export default connect(mapStateToProps, actions)(Countries)
