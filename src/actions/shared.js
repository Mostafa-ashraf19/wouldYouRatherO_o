import {hideLoading, showLoading} from 'react-redux-loading-bar'

import {handleLogin} from './authentication'
import {handleGetQustions} from './questions'
import {handleGetUsers} from './users'

const CLEAR_STORE = 'CLEAR_STORE'  

export function handleStore(user) {
  return (dispatch) => {

    dispatch(showLoading())
    dispatch(handleLogin(user))
    dispatch(handleGetQustions())
    dispatch(handleGetUsers())
    dispatch(hideLoading())
  }
}

function ClearStore() {
  return {type : CLEAR_STORE, clrear:true};
}
export function handleClearStore(){
  return (dispatch) => {
        dispatch(ClearStore())
  }
}