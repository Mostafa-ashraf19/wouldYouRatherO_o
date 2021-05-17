import {_getUsers} from '../utils/_DATA'
import {hideLoading, showLoading} from 'react-redux-loading-bar'

export const GET_USERS = 'GET_USERS'
export const UPDATE_USER_QUESTIONS = 'UPDATE_USER_QUESTIONS'
export const UPDATE_USER_ANSWERS = 'UPDATE_USER_ANSWERS'

function getUsers(users) {
  return {
    type: GET_USERS, 
    users
  }
}

export function updateUserQuestions(meta) {
  return {
    type : UPDATE_USER_QUESTIONS, meta // here need UserId, QuestionId
  }
}

export function updateUserAnswers(meta) {
  return {
    type : UPDATE_USER_ANSWERS, meta // here need QuestionId, option
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