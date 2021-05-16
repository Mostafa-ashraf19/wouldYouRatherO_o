import {GET_QUESTIONS,ADD_QUESTION,SAVE_ANSWER,CLEAR_QUESTIONS} from '../actions/questions'


export default function questions(state = {}, action){

    switch(action.type) {
        case GET_QUESTIONS: 
            return  {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION: 
            return {
                ...state,
                [action.question.id] : action.question,
            }
        case SAVE_ANSWER : 
            return {
                ...state,
                [action.meta.qid] : {
                    ...state[action.meta.qid], 
                    [action.meta.answer] : {
                        ...state[action.meta.qid][action.meta.answer],
                        votes : state[action.meta.qid][action.meta.answer].votes.concat([action.meta.authedUser])    
                    }  
                }

            } 
        case  CLEAR_QUESTIONS:
            return action.questions            
        default:
            return state
    }

}