import { combineReducers } from "redux";
import everything from './everything';
import header from './header'

export default combineReducers({
	everything,
	header,
})