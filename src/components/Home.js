import '../index.css'
import React, {Component,Fragment} from 'react'
import Question from './Question'

import LoadingBar from 'react-redux-loading-bar'

import {connect} from 'react-redux'

class Home extends Component {

    state = {
        displayUnAnswered : true,
    }
    handleUnAnsweredClick = (e) =>  {
        e.preventDefault()
        this.setState({displayUnAnswered : true})
    }

    handleAnsweredClick = (e) => {
        e.preventDefault()
        this.setState({displayUnAnswered : false})

    }
    render() {

        const {displayUnAnswered} = this.state
        const {answeredQuestions,unansweredQuestions,loadding} = this.props

        return (
            <Fragment>
                <LoadingBar   style={{ backgroundColor: 'blue', height: '5px' }}/>

            {
                loadding !== true ? null : 
                    <div className='Home'>
                        
                        <div className='Home-div'>
                                <button onClick={this.handleUnAnsweredClick} className='Home-btn' >Unanswered Questions</button>
                                <button onClick={this.handleAnsweredClick} className='Home-btn'>Answered Questions</button>
                        </div>
                                    
                        {
                            // Answered Questions
                        (displayUnAnswered === false && answeredQuestions.length > 0) && <ul>
                                {
                                answeredQuestions.map((AQuestion) => 
                                {
                                    const user = this.props.users[AQuestion.author]
                            return ( <li className='Question-DB' key={AQuestion.id}>
                                    {
                                        <Question questionType={displayUnAnswered}   name={user.name} UId={AQuestion.author} AvatarURL={user.avatarURL} question={AQuestion} />
                                    }
                                </li>
                                )})}
                            </ul> 
                        }

                        {
                            // Unanswered Questions
                        (displayUnAnswered === true && unansweredQuestions.length > 0) && <ul>
                                {
                                unansweredQuestions.map((AQuestion) => 
                                {
                                    const user = this.props.users[AQuestion.author]
                            return ( <li className='Question-DB' key={AQuestion.id}>
                                    {
                                        <Question questionType={displayUnAnswered} name={user.name} UId={AQuestion.author} AvatarURL={user.avatarURL} question={AQuestion} />
                                    }
                                </li>
                                )})}
                            </ul> 
                        }            
                    </div>
                }

            </Fragment>

        )

    }

}

function mapStateToProps ({loadingBar,questions,users,authenticate}) {
    
    // Prepare Questions
    const answers = authenticate !== '' && Object.keys(users).length > 0 ? users[authenticate].answers : {}
    const answersQIds = Object.keys(answers)
    const answeredQuestions = answersQIds.map((Qid) => questions[Qid])

    const unansweredQuestions = Object.keys(questions).filter((Qid) => 
    !(answersQIds.includes(Qid))).map((Qid) => questions[Qid])
    
    return {
        answeredQuestions,
        unansweredQuestions,
        users,
        loadding : loadingBar.default === 0

    }
}

const CHome = connect(mapStateToProps)(Home)

export default CHome
