import React, {Component,Fragment} from 'react'
import {handleStore} from '../actions/shared'

import LoadingBar from 'react-redux-loading-bar'

import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Nav from './Nav'

// import Login from './Login'
import CDashBoard from './DashBoard'
import NewQuestion from './NewQuestion'

// git add  `git ls-files --deleted`
// redux apps has just one store for entire application

export class App extends Component {
  componentDidMount() {
    // const data = ;
    // console.log('data is', data)
    const user = 'johndoe'

    const {dispatch} = this.props
    dispatch(handleStore(user))

  }
  render() {
    const {loadding,userName,avatarURL} = this.props
    return (

   
      <Router>
            <Fragment>
              <LoadingBar   style={{ backgroundColor: 'blue', height: '5px' }}/>
              
             { 
             loadding !== true ? null : 
                <div>
                    <Nav userName={userName} avatarURL={avatarURL}/>
                  
                    <Route exact path='/new' component={NewQuestion} />
                    <Route exact path='/dashboard' component={CDashBoard} />

                    
                  </div>
                          
             }
                               
            </Fragment>
      </Router>


    )
  }
}
function mapStateToProps({loadingBar,authenticate,users}){
  const avatarURL = Object.keys(users).length > 0 && authenticate !== '' ? users[authenticate].avatarURL : ''
    const userName = Object.keys(users).length > 0 && authenticate !== '' ? users[authenticate].name : ''
    
    return {
        avatarURL,
        userName,
        loadding : loadingBar.default === 0
    }
  

}
// mapStateToProps
const conncetedApp = connect(mapStateToProps)(App)

export default conncetedApp