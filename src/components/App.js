import React, {Component} from 'react'
import {handleGetUsers} from '../actions/users'
import {handleGetQustions} from '../actions/questions'


import {connect} from 'react-redux'
import Login from './Login'

// git add  `git ls-files --deleted`
// redux apps has just one store for entire application

export class App extends Component {
  componentDidMount() {
    // const data = ;
    // console.log('data is', data)
    const {dispatch} = this.props
    dispatch(handleGetUsers())
    dispatch(handleGetQustions())
  }
  render() {
    return (
        
        <div >
            {/* APP */}
            <Login />
        </div>

    )
  }
}
function mapStateToProps(state){
  return {
    
  }

}
// mapStateToProps
const conncetedApp = connect()(App)

export default conncetedApp