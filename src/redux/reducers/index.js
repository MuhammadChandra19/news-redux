import { combineReducers } from "redux";
import everything from './everything';
import header from './header'
import location from './location'
import params from './params'
import common from './common'

export default combineReducers({
	everything,
	header,
	location,
	params,
	common,
})