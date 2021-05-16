import '../index.css'
import React,{ Fragment, Component} from 'react'
import {connect} from 'react-redux'

import {handleAddQuestion} from '../actions/questions'
import LoadingBar from 'react-redux-loading-bar'


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
        const {loadding} = this.props
        
        return (
            
            <Fragment>
                <LoadingBar   style={{ backgroundColor: 'blue', height: '5px' }}/>

                {
                    loadding !== true ? null : 

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
                }

            </Fragment>

        )
    }
}

function mapSateToProps ({loadingBar}){
    return {
        loadding : loadingBar.default === 0
    }
}

const ConnectedNQ = connect(mapSateToProps)(NewQuestion)

export default ConnectedNQ