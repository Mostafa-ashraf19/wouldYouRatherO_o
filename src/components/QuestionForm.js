import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {IconContext} from "react-icons"
import {GiVote} from 'react-icons/gi'
import NotFoundPage from './NotFound'
import LoadingBar from 'react-redux-loading-bar'

import {handleSaveAnswer} from '../actions/questions'
class QuestionForm extends Component {
    state = {
        answer : '',
        toHome:false 
    }
    handleChange = e => {
        const {value}  = e.target
        this.setState({'answer':value})
    }
    handleSubmit = e => {
        e.preventDefault()
        const {answer} = this.state
        const {dispatch} = this.props
        const {qid} = this.props
        dispatch(handleSaveAnswer({qid,answer}))
        this.props.location.state.questionType = false

    }
    render( ) {

        const {questionType,question,avatarURL,name,authedUserAnswer,loadding,exists} = this.props
        
        if (exists === false) {
            return (
                <div>
                    <NotFoundPage />
                </div>
            )
        }

        const totalQuestionLength = question.optionOne.votes.length + question.optionTwo.votes.length
        // const op
        return (
            <Fragment>
                <LoadingBar   style={{ backgroundColor: 'blue', height: '5px' }}/>
                {
                // true for unAnswered Question.
                (loadding === true &&  questionType === true) && 
                
                <div className='Question-container'>
                    <h3 className='h1-style'>Asked by <span>{name}</span></h3>  
                    <div className='div-container'>
                            
                            <div  className='div-left'>
                                 <img className='Question-avatar' src={avatarURL} alt={name}/>    
                            </div>

                            <div className='div-left'>
                                <h1>Would You Rather ... </h1>
                                <form onSubmit={this.handleSubmit}>
                                    
                                    <p>

                                        <input 
                                        type='radio' 
                                        value='optionOne'
                                        name='answer'
                                        onChange={this.handleChange}
                                        />
                                        <b>{question.optionOne.text}</b>

                                    </p>
                                    <p>

                                        <input 
                                        type='radio' 
                                        value='optionTwo'
                                        name='answer'
                                        onChange={this.handleChange}
                                        />
                                        <b>{question.optionTwo.text}</b>

                                    </p>

                                    <input type='submit' className='Question-btn'  values='Submit' />
                                </form>
                            </div>
                    </div>            
                        

                </div>

                }

                {  (loadding === true &&questionType === false) && 
                    //  Answered Question.  
                    
                    <div className='Question-container'>

                        <h3 className='h1-style'>Asked by <span>{name}</span></h3>  

                        <div className='div-container'>
                            
                            <div  className='div-left'>
                                 <img className='Question-avatar' src={avatarURL} alt={name}/>    
                            </div>

                            <div className='div-left'>
                                
                                <h1>Results:</h1>
                                
                                {/* First Answer box*/}
                                <div className='Question-box'>

                                { authedUserAnswer === "optionOne" && 
                                    <div className='div-icon'>


                                    <IconContext.Provider value={{ size: '40px'}}>
                                            <GiVote   />    
                                        </IconContext.Provider>

                                    </div>   
                                } 
                                     
                                    <h4 className='center'>Would you rather {question.optionOne.text}?</h4>

                                    <div className='center'>
                                        <progress className='progress-bar'  value={question.optionOne.votes.length} max={totalQuestionLength}
                                        ></progress>
                                    </div>

                                    <p className='center'><span>{question.optionOne.votes.length}</span> out of <span>
                                        {totalQuestionLength}</span> votes</p>
                                </div>

                                {/* Second Answer box*/}
                                <div className='Question-box'>

                                { authedUserAnswer === "optionTwo" && 
                                    <div className='div-icon'>


                                    <IconContext.Provider value={{ size: '40px'}}>
                                            <GiVote   />    
                                        </IconContext.Provider>

                                    </div>   
                                }

                                    <h4 className='center'>Would you rather {question.optionTwo.text}?</h4>
                                    
                                    <div className='center'>
                                    <progress className='progress-bar'  value={question.optionTwo.votes.length} 
                                    max={totalQuestionLength} ></progress>
                                    </div>

                                    <p className='center'><span>{question.optionTwo.votes.length}</span> out of <span>
                                        {totalQuestionLength}</span> votes</p>
                                </div>    
                                
                            </div>  

                        </div>  

                    </div>
                    
                }

            </Fragment>
        )

    } 
} 

function mapstateToProps({loadingBar,users,questions,authenticate},ownProps) {
    

    const qid = ownProps.match.params.id
    
    const exists = qid in questions
    if(exists === false) {
        return {
            exists:false,
            loadding : loadingBar.default === 0
        }
    }

    const {questionType} = ownProps.location.state // true for unAnswered Question.

    const question = questions[qid]
    const {avatarURL,name,answers} = users[questions[qid].author]
    const authedUserAnswer = answers[qid]

    return {
        exists:true,
        qid,questionType,question,avatarURL,name,authedUserAnswer,
        loadding : loadingBar.default === 0
    }
}

const CQuestionForm = connect(mapstateToProps)(QuestionForm)

export default  CQuestionForm