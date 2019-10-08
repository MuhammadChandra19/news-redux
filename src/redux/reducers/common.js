const initialState = {
  visible: {}
}

export default (state = initialState, action) => {
  const { visible } = state
  const { type, payload } = action
	switch (type) {
		case 'SET_VISIBLE':
			return {
        ...state,
        visible: {
          ...visible,
          ...payload 
        }

      };
		default:
			return state;
	}
}