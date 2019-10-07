import { combineReducers } from "redux";
import everything from './everything';
import header from './header'
import location from './location'
import params from './params'

export default combineReducers({
	everything,
	header,
	location,
	params,
})