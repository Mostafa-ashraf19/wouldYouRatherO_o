import '../index.css'
import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import {connect} from 'react-redux'
import {handleLogOut} from '../actions/authentication'

class  Nav extends Component {
    
    LogOut = (e) => {
        e.preventDefault()
        const {dispatch} = this.props
        // console.log('dis is', dispatch)
        dispatch(handleLogOut())
        
    }

    render() {
              
        const {userName,avatarURL} = this.props

        return (
            <nav  className='nav'>
                
                <div className='nav-f-left'>
                    <ul>
                        <li>
                            <NavLink to="/" exact className='aLink' activeClassName='active'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/new" exact  className='aLink' activeClassName='active'>New Question</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard" exact className='aLink' activeClassName='active'>Leader Dashboard</NavLink>
                        </li>
                    </ul> 
                </div>

                { (userName !== '' && avatarURL !== '') && 

                    <div className='nav-f-left'>
                        <form className='form'>
                            <p className='nav-form-left'>Hello, {userName}</p>
                            <img className='nav-avatar'  src={avatarURL} alt={userName}/>
                            <input className='btn' onClick={this.LogOut}  type='submit' value='Logout' />
                        </form>
                    </div>               
                }

                

            </nav>
        )
}

}


const CNav  = connect()(Nav)
export default CNav 

