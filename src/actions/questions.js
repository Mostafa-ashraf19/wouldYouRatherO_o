import {_getQuestions} from '../utils/_DATA'

export const GET_QUESTIONS = 'GET_QUESTIONS';

function getQuestions(questions) {
  return {
    type: GET_QUESTIONS, 
    questions
    };
}

export function handleGetQustions() {
    return (dispatch) => {
        _getQuestions().then((questions) => {
            // console.log('questions is ', questions)
            // console.log('dispatch is', dispatch)
            dispatch(getQuestions(questions))
        }).catch((e) => {
            alert('Error happen', e);
        })
    }
}