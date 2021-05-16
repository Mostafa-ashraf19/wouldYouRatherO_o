import React, {Component,Fragment } from 'react'
import {connect} from 'react-redux'

import LoadingBar from 'react-redux-loading-bar'

import {handleGetUsers} from '../actions/users'
import {handleLogin} from '../actions/authentication'
import {handleGetQustions} from '../actions/questions'

class Login extends Component {

    state = {
        uid : ''
    }
    componentDidMount () {
        const {dispatch,users} = this.props
        if(Object.keys(users) <= 0 ) {
            dispatch(handleGetUsers())
        }

    }
    handleLogin = e => {
        e.preventDefault()
        const {dispatch} = this.props
        const {uid} = this.state

        dispatch(handleLogin(uid))
        dispatch(handleGetQustions())

    }

    handleSignup = e => {
        e.preventDefault()

    }
    handlechange = e => {
        e.preventDefault()
        const value = e.target.value
        
        if(value==='select')
            return

        this.setState({uid:value})    

    }
    render(){
        const {users,loadding} = this.props 
        const usersId = Object.keys(users)

        return (

            <Fragment>
                <LoadingBar   style={{ backgroundColor: 'blue', height: '5px' }}/>

                {
                    loadding !== true ? null : 

                <div className='Login'>
                    
                    <div className='center'>
                        <b>Welcom to the Would You Rather App!</b>
                        <h4>Please SignUp to continue or select current users then signin</h4>
                    </div>

                    <form className='center' onSubmit={this.handleSignup} >
                    
                        <input  className='login-input' type='text' placeholder='Username --- (not finished yet)'/>
                        <input className='login-input' type='password' placeholder='Password --- (not finished yet)'/>
                        <input className='Question-btn' type='submit' value='SignUp'/>

                    </form>

                    <form className='center' onSubmit={this.handleLogin}>
                    

                        {
                            usersId.length > 0  && 
                            <select  onChange={this.handlechange} className='login-input'>
                                <option value='select'>Select User ....</option>
                                { usersId.map((UId) => 
                            {
                                return  (
                                <option  value={UId} key={UId}>
                                    {users[UId].name}
                                </option>
                                
                            )})}
                            </select>
                        }
                    
                        <input className='Question-btn' type='submit' value='SignIn'/>
                    </form>                    
                
                </div>
                }

            </Fragment>
        )
    }

}   

function mapStateToProps({loadingBar,users}) {
    return {
        users,
        loadding : loadingBar.default === 0


    }

}

const ConnectedLogin = connect(mapStateToProps)(Login)

export default ConnectedLogin
