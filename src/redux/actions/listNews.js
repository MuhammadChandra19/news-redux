import { everythingApi } from '../../api'
export const getList = (store) => {
	const list = store.everything
	return list
}

export const loadNews = () => {
	return (dispatch) => {
		return everythingApi.getNews('top-headlines', { country: 'us' })
			.then(res => {
				dispatch(returnNews(res.data))
			})
			.catch(err => console.log(err))
	}
}

export const returnNews = (res) => {
	return {
		type: "NEWS_API",
		payload: res
	}
}