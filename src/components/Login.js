import React, {Component } from 'react'
import {connect} from 'react-redux'

class Login extends Component {


    render(){
        const {users} = this.props 
        const usersId = Object.keys(users)
        console.log('Hi')

        // console.log('users id', usersId.length)
        console.log('user name', users[usersId[0]])

        return (
            <div>
                
                <div>
                    <b>Welcom to the Would You Rather App!</b>
                    <h4>Please sign in to continue or select current users</h4>
                </div>
                <form>
                
                    <input type='text' placeholder='Username'/>
                    <input type='password' placeholder='Password'/>
                
                {
                    usersId.length > 0  && 
                    <select>{ usersId.map((UId) => 
                    {
                        console.log('in map ', UId , ' name ', users[UId].name )
                        return  (
                        <option key={UId}>
                            {users[UId].name}
                        </option>
                        
                    )})}
                    </select>
                }
                
                <input type='submit' value='Sign In'/>
                </form>                    
            
            </div>
        )
    }

}   

function mapStateToProps({users}) {
    return {
        users
    }

}

const ConnectedLogin = connect(mapStateToProps)(Login)

export default ConnectedLogin
