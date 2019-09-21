import React from "react"
import { connect } from "react-redux"
import { Card, Avatar, Icon, Col } from 'antd'
import { getList } from '../../redux/actions/listNews'
const { Meta } = Card

const News = ({ news }) => (

	news && news.length
		? news.map((dt, idx) =>
			<Col className="mb-10" span={22} push={1} pull={1}>
				<Card
					key={idx}
					style={{ width: '100%' }}
					cover={
						<img
							alt={dt.id}
							src={dt.urlToImage}
						/>
					}
					actions={[
						<div>
							<Icon type="read" key="read" />
							<p className="mb-0">read Article</p>
						</div>
						,
						<Icon type="ellipsis" key="ellipsis" />,
					]}
				>
					<Meta
						avatar={<Avatar icon="user" />}
						title={dt.title}
						description={dt.description}
					/>
				</Card>
			</Col>
		)
		: null

)

const mapStateToProps = state => {
	const news = getList(state, 'LOAD_NEWS')
	return { news }
}

export default connect(mapStateToProps)(News)