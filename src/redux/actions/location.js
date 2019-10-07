export const setLocation = (pathname) =>{
  return {
    type:"SET_LOCATION",
    payload: pathname,
  }
}
export const getLocation = () =>{
  return {
    type:"GET_LOCATION",
  }
}