import React, { Component } from 'react';
import Main from '../../layouts/Main';
import { Row } from 'antd';
import News from '../../containers/News'
class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			listData: []
		}
	}
	render() {
		return (
			<Main >
				<Row>
					<News />
				</Row>
			</Main>
		);
	}
}

export default Home;