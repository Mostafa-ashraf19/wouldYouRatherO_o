// Apply reducers
import {loadingBarReducer} from 'react-redux-loading-bar'
import {combineReducers} from 'redux'  // with {} because it's not default export.

import authenticate from './authedUser'
import questions from './questions'
import users from './users'


export default combineReducers(
    {authenticate, users, questions, loadingBar: loadingBarReducer})
