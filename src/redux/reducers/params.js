const initialState = {
  params: {
    country: 'us',
    newsType: 'top-headlines',
    sources: '',
    category: '',
    q: '',
    sortBy: '',
    page: 1,
    from: '',
    to: '',
  }
}

export default (state = initialState, action) => {
  const { params } = state
  const { payload, type } = action
  switch (type) {
    case "SET_PARAM":
      return {
        ...params,
        ...payload,
      }
    default:
      return {
        params
      }
  }
}