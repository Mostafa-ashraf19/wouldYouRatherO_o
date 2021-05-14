import {_getQuestions, _saveQuestion} from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

function getQuestions(questions) {
  return {
    type: GET_QUESTIONS, questions
  }
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION, question
  }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch,getState) => {
    const {authenticate} = getState()
    dispatch(showLoading())
    _saveQuestion({optionOneText, optionTwoText, author:authenticate}).then((question) => {
          dispatch(addQuestion(question));
        }).then(()=>{
          dispatch(hideLoading())
        })
        .catch((e) => {
          alert('An error occurred. Try agin. ', e);
        })
  }
}


export function handleGetQustions() {
  return (dispatch) => {
    _getQuestions()
        .then((questions) => {
          dispatch(getQuestions(questions));
        })
        .catch((e) => {
          alert('An error occurred. Try agin. ', e);
        })
  }
}
