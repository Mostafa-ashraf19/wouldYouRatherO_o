import {_getUsers} from '../utils/_DATA'
import {hideLoading, showLoading} from 'react-redux-loading-bar'

export const GET_USERS = 'GET_USERS'

function getUsers(users) {
  return {
    type: GET_USERS, 
    users
  }
}

export function handleGetUsers() {
  return (dispatch) => {
    dispatch(showLoading())
        _getUsers().then((users) => {
            dispatch(getUsers(users)) 
        }).then(() => {
            dispatch(hideLoading())

        })
  }
}