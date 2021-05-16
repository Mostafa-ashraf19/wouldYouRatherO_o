import {hideLoading, showLoading} from 'react-redux-loading-bar'

import {clearQuestions} from './questions'

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

function LogIn(authedUser) {
  return {
    type: LOGIN, authedUser
  }
}


function LogOut() {
  return {
    type: LOGOUT, authedUser: '',
  }
}

export function handleLogin(authedUser) {
  return (dispatch) => {
    dispatch(showLoading())
    dispatch(LogIn(authedUser))
    dispatch(hideLoading())

  }
}

export function handleLogOut() {
  return (dispatch) => {
    dispatch(showLoading())
    dispatch(LogOut())
    dispatch(clearQuestions())
    dispatch(hideLoading())
  }
}
