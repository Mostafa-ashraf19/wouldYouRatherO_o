import {_getQuestions, _saveQuestion, _saveQuestionAnswer} from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading-bar'


export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER' 
export const CLEAR_QUESTIONS = 'CLEAR_QUESTIONS' 

export function clearQuestions() {
  return {
    type:CLEAR_QUESTIONS,questions : {}
  }
}

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

function saveAnswer(meta) {
  return {
    type : SAVE_ANSWER, meta
  }
}
// ADD QUESTION
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

// GET QUESTIONS
export function handleGetQustions() {
  return (dispatch) => {

    dispatch(showLoading())
    _getQuestions()
        .then((questions) => {
          dispatch(getQuestions(questions));
        }).then(() => {
          dispatch(hideLoading())
        }).catch((e) => {
          alert('An error occurred. Try agin. ', e);
        })
  }
}

export function handleSaveAnswer({ qid, answer }) {
  return (dispatch, getState) => {
    const {authenticate} = getState()

    dispatch(showLoading())
    _saveQuestionAnswer({authedUser:authenticate,qid:qid,answer:answer}).then(()=>{
      dispatch(saveAnswer({authedUser:authenticate,qid,answer}))
    }).then(()=>{
      dispatch(hideLoading())
    }).catch((e)=>{
      alert('An error occurred. Try agin. ', e);
    })
  }
}
