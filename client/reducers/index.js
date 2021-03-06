import { combineReducers } from 'redux'

import devs from './devs'
import mobile from './mobile'
import web from './web'
import software from './software'
import js from './js'
import ts from './ts'
import c from './c'

export default combineReducers({
  devs,
  mobile,
  web,
  software,
  js,
  ts,
  c
})
