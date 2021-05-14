import '../index.css'
import React,{ Fragment, Component} from 'react'
import {connect} from 'react-redux'

import Nav from './Nav'
import {handleAddQuestion} from '../actions/questions'

class NewQuestion extends Component {
    
    state = {
        optionOne : '',
        optionTwo : '',
    }
    
    handleOp1Change = (e) => {
        e.preventDefault()
        const text = e.target.value
        this.setState({optionOne:text})
    }

    handleOp2Change = (e) => {
        e.preventDefault()
        const text = e.target.value
        this.setState({optionTwo:text})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {dispatch} = this.props
        
        // Async Method
        dispatch(handleAddQuestion(this.state.optionOne, this.state.optionTwo))
        
        // Async Method
        this.setState({
            optionTwo : '',
            optionOne : '',
        })
    }

    
    render() {
        
        const {optionOne,optionTwo} = this.state
        const {userName,avatarURL} = this.props
        return (
            
            <Fragment>

                <Nav userName={userName} avatarURL={avatarURL} /> 
                <div className='new-question'>
                    
                        <h1>Create New Question</h1>
                
                        <form onSubmit={this.handleSubmit}>
                            <p>Complete the question:</p>
                            <h3>Would you rather ...</h3>
                            <input 
                            value={optionOne}
                            onChange={this.handleOp1Change}                            
                            type='text'  
                            placeholder='Enter Option One Text Here'
                            
                            />
                            
                            <p>OR</p>
                            
                            <input 
                            
                            value={optionTwo}
                            onChange={this.handleOp2Change}
                            type='text'  
                            placeholder='Enter Option Two Text Here'
                            
                            />
                            <p></p>
                            <input 
                            type='submit' 
                            value='Submit'
                            disabled = { optionOne === '' || optionTwo === ''} 
                            />
                        </form>
                    
                    </div>

            </Fragment>

        )
    }
}

function mapSateToProps ({authenticate,users}){
    const avatarURL = Object.keys(users).length > 0 && authenticate !== ''? users[authenticate].avatarURL : ''
    const userName = Object.keys(users).length > 0 && authenticate !== '' ? users[authenticate].name : ''
    
    return {
        authenticate,
        avatarURL,
        userName
    }
}

const ConnectedNQ = connect(mapSateToProps)(NewQuestion)

export default ConnectedNQ