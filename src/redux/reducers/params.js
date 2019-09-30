import { country } from '../../common/country'
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
  },
  country
}

export default (state = initialState, action) => {
  const { params, country } = state
  const { payload, type } = action
  switch (type) {
    case "SET_PARAM":
      return {
        ...params,
        ...payload,
      }
    case "GET_COUNTRY":
      return country
    default:
      return {
        params
      }
  }
}