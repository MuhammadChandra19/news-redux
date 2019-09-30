const initialState = {
  icon: 'setting',
  
}

export default (state = initialState, action) => {
  const {  type } = action
  switch (type) {
    case "SET_ICON":
      return {
        ...state,
        icon: state.icon === 'setting' ? 'left-circle' : 'setting',
      }
    default:
      return state
  }
}