import React, { Component } from 'react';
import { Row } from 'antd';
import { withRouter } from 'react-router-dom'
import Main from '../../layouts/Main';

import News from '../../containers/News'
class Home extends Component {
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

export default withRouter(Home);