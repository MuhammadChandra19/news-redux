import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Layout, Icon } from 'antd'
import { connect } from "react-redux"
import { MENU } from '../../config/menu'
import * as actions from '../../redux/actions/header'
import '../../styles/layouts/_header.css'


const { Header } = Layout

class AppHeader extends Component {
	constructor(props){
		super(props)
		this.state= {
			icon: '',
			path: ''
		}
	}

	async componentWillReceiveProps(nextProps){
    if (nextProps.icon !== this.state.icon) {
			this.setState({icon: nextProps.path === '/filter' ? "left-circle" : "setting", path: nextProps.path})
    }
  }


	async componentDidMount(){
		const { path } = this.props
		await this.setState({ icon: path === '/filter' ? "left-circle" : "setting", path })
	}
	pushPage = async() => {
		const { headerState } = this.props
		const { path } = this.state
		await headerState(path)
		// console.log(this.props)
		await this.props.history.push(MENU.FILTER)
	}

	backHome = async() => {
		const { headerState } = this.props
		const { path } = this.state
		await headerState(path)
		await this.props.history.goBack()
	}

	render() {
		const { icon } = this.state
		return (
			<Header className="Header_root" style={{ background: '#fff', padding: 0 }}>
				<div className="app-header">
					<Icon
						onClick={icon === "setting" ? this.pushPage : this.backHome}
						className="setting-menu"
						theme="twoTone"
						type={icon} />
				</div>

			</Header>
		);
	}
}

const mapStateToProps = state => {
  const { header, location } = state
	const { icon } = header
	const { path } = location
  return {
		icon,
		path
  }
}

export default connect(mapStateToProps, actions)(withRouter(AppHeader));