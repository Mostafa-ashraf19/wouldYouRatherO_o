import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Question extends Component {

    handlePoll = (e) => {
        const {questionType} = this.props 
        console.log('type of Q is ', questionType)
    }
    render() {
        // console.log('this.props is', this.props )
        const {name,UId,AvatarURL,question} = this.props
        const text = question.optionOne.text
        return (
            
            <div className='Home-container'>
                <h2>{name} <span>asks: </span></h2>
                <div className='Home-container'>
                    <div className='Home-left'>
                        <img className='Home-avatar' src={AvatarURL} alt={UId}/>
                    </div>
                    <div className='Home-left'>
                        <h3>Would you rather</h3>
                        <p>...{text}...</p>
                    <Link to={{pathname: `/questions/${question.id}`, 
                            state: {
                                // true for unAnswered Question.
                                questionType: this.props.questionType
                            }
                            }} >
                        <button className='Question-btn'>View Poll</button>
                    </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Question