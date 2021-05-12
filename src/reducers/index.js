// Apply reducers

import {combineReducers} from 'redux' // with {} because it's not default export.
import users from './users'
import questions from './questions'


export default combineReducers({users,questions})

