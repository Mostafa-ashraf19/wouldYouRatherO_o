import {LOGIN,LOGOUT} from '../actions/authentication'

// ,LogIn,LogOut

export default function authenticate(state = '', action ) {
    switch(action.type) {
        case LOGIN : 
            return action.authedUser
        case LOGOUT:
            console.log('state is from log out ', state)
            return action.authedUser            
        default:
            return state

    }

}