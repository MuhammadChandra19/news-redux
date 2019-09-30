import {MENU} from '../config/menu'
import Home from '../pages/Home'
import Filter from '../pages/Filter'


export const ROUTES = [
  {
    path: MENU.MAINPAGE,
    component: Home 
  },
  {
    path: MENU.FILTER,
    component: Filter,
  }
]