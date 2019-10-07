const initialState = {
  path: '/',
}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_LOCATION':
      return {
        ...state,
        path: payload,
      }
    case 'GET_LOCATION':
      return state.path
    default:
			return state;
  }
}