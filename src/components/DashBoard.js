import React, {Component} from 'react'
import {connect} from 'react-redux'
import User from './User'
import '../index.css'

class Dashboard extends Component {

    render() {
        const {users} = this.props

        return (
            <div>
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
    
    return {
        users: Object.keys(users).length <= 0 ? [] : Object.values(users).sort((a,b)=> {
           return (Object.keys(b.answers).length + b.questions.length) - (Object.keys(a.answers).length + a.questions.length)
        })
    }
}

const ConnectedDashBoard = connect(mapStateToProps)(Dashboard)

export default ConnectedDashBoard
