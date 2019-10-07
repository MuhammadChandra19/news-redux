import { country } from '../../common/country'

const initialState = {
  data: {
    country: 'us',
    sources: '',
    category: '',
    q: '',
    sortBy: '',
    page: 1,
    from: '',
    to: '',
  },
  preset: {

  },
  country,
  categoryList: [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology'
  ]
}

export default (state = initialState, action) => {
  const { data, preset } = state
  const { payload, type } = action
  switch (type) {
    case "SET_PARAMS":
      return {
        ...state,
        data : { ...data, ...preset },
       
      }
    case "PRESET_PARAMS":
      return {
        ...state,
        preset: { ...preset, ...payload}
      }
    case "RESET_PARAMS":
      return {
        ...state,
        data: {
          country: 'us',
          sources: '',
          category: '',
          q: '',
          sortBy: '',
          page: 1,
          from: '',
          to: '',
        },
        preset: {}
      }
    default:
      return state
  }
}