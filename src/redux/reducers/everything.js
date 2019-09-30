const initialState = {
	newsList: [],
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'LOAD_NEWS':
			return state.newsList;
		case 'NEWS_API':
			return {
				...state,
				newsList: action.payload.articles
			}
		default:
			return state;
	}
}