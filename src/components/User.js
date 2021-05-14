import React from 'react'

export default function User(props) {

    const {name,avatarURL,answers,questions} = props.user
    const answersLen = Object.keys(answers).length ,questionsLen =  questions.length
    return (
        <div>
            <div>
                 <img className='avatar' src={avatarURL} alt={name}/> 
            </div>
            <div>
                <h2>{name}</h2>
                <div className='cont-div'>
                    <p className='f-left'>Answered questions</p>
                    <p className='f-left-r'>{answersLen}</p>
                </div>
                <div className='cont-div'>
                    <p className='f-left'>Created questions</p>
                    <p className='f-left-r'>{questionsLen}</p>
                </div>
            </div>
            <div className='last-child'>
                <h2>Score</h2>
                <p>{answersLen + questionsLen}</p>
            </div>
            <br/>
        </div>

)
}
