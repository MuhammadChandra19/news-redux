import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import '../../styles/layouts/_header.css'

const { Header } = Layout

class AppHeader extends Component {
	render() {
		return (
			<Header className="Header_root" style={{ background: '#fff', padding: 0 }}>
				<div className="app-header">
					<Icon
						className="setting-menu"
						theme="twoTone"
						type="setting" />
				</div>

			</Header>
		);
	}
}

export default AppHeader;