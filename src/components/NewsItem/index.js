import React from "react"
import { Card, Avatar, Icon } from 'antd'
const { Meta } = Card


const NewsItem = ({ news }) => (
	<React.Fragment>
		<Card
			style={{ winewsh: '100%' }}
			cover={
				<img
					alt={news.id}
					src={news.urlToImage}
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
				title={news.title}
				description={news.description}
			/>
		</Card>
	</React.Fragment>
)


export default NewsItem