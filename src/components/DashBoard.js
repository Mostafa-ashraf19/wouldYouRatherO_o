import React, {Component} from 'react'
import {connect} from 'react-redux'
import User from './User'
import Nav from './Nav'
import '../index.css'


class Dashboard extends Component {

    render() {
        const {users,userName,avatarURL} = this.props

        return (
            <div>
                <Nav userName={userName} avatarURL={avatarURL}/>
                {
                    <div className='mar-top'>  

                        <ul>
                            {
                                users.map((user) => 
                                <li className='user-data' key={user.name}>
                                    <User user={user}/>
                                </li>
                                )
                            }
                        </ul>

                    </div>
                }
            </div>
        
        )
    }

}

function mapStateToProps({users,authenticate}){
    const avatarURL = Object.keys(users).length > 0 && authenticate !== '' ? users[authenticate].avatarURL : ''
    const userName = Object.keys(users).length > 0 && authenticate !== '' ? users[authenticate].name : ''
 
    return {
        users: Object.keys(users).length <= 0 ? [] : Object.values(users).sort((a,b)=> {
           return (Object.keys(b.answers).length + b.questions.length) - (Object.keys(a.answers).length + a.questions.length)
        }),avatarURL,
        userName,
    }
}

const ConnectedDashBoard = connect(mapStateToProps)(Dashboard)

export default ConnectedDashBoard
