# Would You Rather Project

React and Redux web app that lets a user play the "Would you Rather?" game.

A user is asked a question in the form: `Would you rather [option A] or [option B] ?`. Answering `one of them`. In the app, users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

The `_DATA.js` file represents a fake database and methods that let you access the data. So, app works with a pseudo backend server, there is no data persistence and hence, any new questions or answers will be lost by performing a browser refresh. 

## Get Started

To get started:

* install all project dependencies with `yarn install`
* start the app with `yarn start`
* access the app on http://localhost:3000/

## Preview

1. **Login** 
   
   <img src="https://raw.githubusercontent.com/Mostafa-ashraf19/wouldYouRatherO_o/master/screenshots/Login.png" alt='not finished yet'/>
      
2. **Home**

   <img src="https://raw.githubusercontent.com/Mostafa-ashraf19/wouldYouRatherO_o/master/screenshots/Home.png" alt='not finished yet' /> 

4. **Question**

    <img src="https://raw.githubusercontent.com/Mostafa-ashraf19/wouldYouRatherO_o/master/screenshots/Question.png" alt='not finished yet' />
  
6. **Answer**
    
    <img src="https://raw.githubusercontent.com/Mostafa-ashraf19/wouldYouRatherO_o/master/screenshots/Answer.png" alt='not finished yet' />

8. **New Question**

    <img src="https://raw.githubusercontent.com/Mostafa-ashraf19/wouldYouRatherO_o/master/screenshots/NewQuestion.png" />
  
10. **Leaderboard**
    
    <img src="https://raw.githubusercontent.com/Mostafa-ashraf19/wouldYouRatherO_o/master/screenshots/Leaderboard.png" />


## Data

There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database.  
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|
