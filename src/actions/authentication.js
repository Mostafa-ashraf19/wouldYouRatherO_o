import {hideLoading, showLoading} from 'react-redux-loading-bar'


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
    dispatch(LogIn(authedUser))
  }
}

export function handleLogOut() {
  console.log('Hi')
  return (dispatch) => {
    dispatch(showLoading())
    dispatch(LogOut())
    dispatch(hideLoading())
  }
}
