import React, { Component } from "react"
import { Menu, Button, Dropdown } from 'antd'
import { connect } from "react-redux"
import * as actions from '../../redux/actions/params'

class Category extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: ''
    }
  }
  setTitle = (title) => {
    this.setState({title : `: ${title}`})
  }

  render() {
    const { title } = this.state
    const { categoryList } = this.props
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
        <Button icon="appstore" >Category {title}</Button>
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
