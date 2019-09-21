import React, { Component } from 'react';
import Main from '../../layouts/Main';
import { Row } from 'antd';
import News from '../../components/News'
class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			listData: []
		}
	}

	componentDidMount() {

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