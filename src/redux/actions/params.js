export const setParams = () => {
  return {
    type:"SET_PARAMS",
  }
}

export const resetParams = () => {
  return {
    type:"RESET_PARAMS",
  }
}

export const preSetParams = (params) => {
  return {
    type:"PRESET_PARAMS",
    payload: params,
  }
}

export const getParams = () => {
  return{
    type: "GET_PARAMS",
  }
}