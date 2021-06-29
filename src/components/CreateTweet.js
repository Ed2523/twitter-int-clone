import React from 'react';
import '../styles/createTweet.css';
import { v4 as uuidv4 } from 'uuid';

const CreateTweet = ({ userInput, setUserInput, tweets, setTweets }) => {

    const inputHandler = (event) => {
        setUserInput(event.target.value);
    }
    //In this context tweets refers to the user input("the message text"), this is input is pushed into the array tweets, the actual tweet component is created and render in TweetList.js
    const submitTweet = (e) => {
        if ((e.target.className === 'form-container') || (e.key === 'Enter')) {
            e.preventDefault();
            setTweets([...tweets, {
                name: 'this is the tweet object',
                text: userInput,
                id: uuidv4()
            }])
            setUserInput('');
        }
    }
    return (
        <div>
            <form onSubmit={submitTweet} onKeyDown={submitTweet} className="form-container">
                <div className="text-container">
                    <textarea value={userInput} onChange={inputHandler} cols="50" rows="5" spellCheck="false"></textarea>
                </div>
                <div className="button-container">  <button >Tweet</button></div>
            </form >
        </div>
    )
}

export default CreateTweet;