import {GET_USERS,UPDATE_USER_QUESTIONS,UPDATE_USER_ANSWERS} from '../actions/users'


export default function users(state = {}, action){

    switch(action.type) {
        case GET_USERS: 
            return  {
                ...state,
                ...action.users
            }
        case UPDATE_USER_QUESTIONS : 
            
            return {
                ...state,
                [action.meta.userId] : {
                    ...state[action.meta.userId],
                    questions : state[action.meta.userId].questions.concat([action.meta.questionId])
                }
            }  
        case UPDATE_USER_ANSWERS : 
            return {
                ...state, 
                [action.meta.uId] : {
                    ...state[action.meta.uId],
                    answers : {
                        ...state[action.meta.uId].answers, 
                        [action.meta.qId] : action.meta.answer
                    }
                }
            }          
        default:
            return state
    }

}