import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux"
import * as actions from '../../redux/actions/location'
import { Layout, BackTop } from 'antd';
import AppHeader from '../Header'
import '../../styles/layouts/_main.css'


class Main extends Component {
	async componentDidMount() {
		const { location, setLocation } = this.props
		await setLocation(location.pathname)
	}
	render() {
		return (
			<Layout>
				<AppHeader />
				
				<div className="main-child">
					{
					
						this.props.children
					}
				</div>
				<BackTop />
			</Layout>
		);
	}
}

export default connect(null, actions)(withRouter(Main));