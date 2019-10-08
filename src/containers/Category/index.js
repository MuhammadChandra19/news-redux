import React, { Component } from "react"
import { Menu, Button, Dropdown } from 'antd'
import { connect } from "react-redux"
import * as actions from '../../redux/actions/params'

class Category extends Component {
  setTitle = async (title) => {
    const { preSetParams } = this.props
    await preSetParams({category: title })
  }

  render() {
    const { categoryList, preset } = this.props
    const menu =  (
      <Menu>
        {
          categoryList.map( dt => 
            <Menu.Item key={dt} onClick={() => this.setTitle(dt)}>
              <p  className="mb-0">{dt}</p>
            </Menu.Item>
          )
        }
      </Menu>
    )
    return (
      <Dropdown overlay={menu} placement="bottomCenter">
        <Button icon="appstore" >Category { `: ${preset.category || ''}`}</Button>
      </Dropdown>
    )
  }
}

const mapStateToProps = state => {
  const { params } = state
  const { data, preset, categoryList } = params
  return {
    data,
    preset,
    categoryList
  }
}






export default connect(mapStateToProps, actions)(Category)
