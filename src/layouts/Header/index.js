import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Layout, Icon } from 'antd'
import { connect } from "react-redux"
import { MENU } from '../../config/menu'
import * as actions from '../../redux/actions/header'
import '../../styles/layouts/_header.css'

const { Header } = Layout

class AppHeader extends Component {

	pushPage = async() => {
		const { headerState } = this.props
		await headerState()
		await this.props.history.push(MENU.FILTER)
	}

	backHome = async() => {
		const { headerState } = this.props
		await headerState()
		await this.props.history.goBack()
	}

	render() {
		const { icon } = this.props
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
  const { header } = state
  const { icon } = header
  return {
    icon
  }
}

export default connect(mapStateToProps, actions)(withRouter(AppHeader));