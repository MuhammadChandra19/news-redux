import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Layout } from 'antd';
import AppHeader from '../Header'
import '../../styles/layouts/_main.css'


class Main extends Component {
	render() {
		return (
			<Layout>
				<AppHeader />
				
				<div className="main-child">
					{
					
						this.props.children
					}
				</div>

			</Layout>
		);
	}
}

export default withRouter(Main);