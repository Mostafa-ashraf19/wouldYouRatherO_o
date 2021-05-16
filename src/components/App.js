import React, {Component,Fragment} from 'react'

import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Nav from './Nav'

import Login from './Login'
import CDashBoard from './DashBoard'
import NewQuestion from './NewQuestion'
import Home from './Home'
import QuestionForm from './QuestionForm'

// git add  `git ls-files --deleted`
// redux apps has just one store for entire application

export class App extends Component {
  
  render() {
    const {loadding,userName,avatarURL,authenticate} = this.props

    console.log('loadding is', loadding )
    return (

      
      <Router>
            <Fragment>
              
                <div>
                    {
                      loadding !== true ? null : <Nav userName={userName} avatarURL={avatarURL}/>
                    }
                    
                    <Route exact path='/' render={() => {
                     return   authenticate ===''? <Login /> :  <Home />
                    }} />

                    <Route exact path='/add' render={() => {
                     return  authenticate ==='' ? <Login /> :  <NewQuestion />
                    }}  />
                    
                    <Route exact path='/leaderboard' render={() => {
                     return  authenticate==='' ? <Login /> :  <CDashBoard />
                    }} />

                       {
                         authenticate !== '' && 
                          <Route exact path='/questions/:id' component={QuestionForm} />
                       }

             
                  </div>
                               
            </Fragment>
      </Router>


    )
  }
}
function mapStateToProps({loadingBar,authenticate,users}){
    const avatarURL = Object.keys(users).length > 0 && authenticate !== '' ? users[authenticate].avatarURL : ''
    const userName = Object.keys(users).length > 0 && authenticate !== '' ? users[authenticate].name : ''
    
    return {
        authenticate,
        avatarURL,
        userName,
        loadding : loadingBar.default === 0
    }
  

}
// mapStateToProps
const conncetedApp = connect(mapStateToProps)(App)

export default conncetedApp