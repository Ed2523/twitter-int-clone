import './App.css';
import TweetList from './components/TweetList';
import CreateTweet from './components/CreateTweet';
import React, { useState } from 'react';

function App() {
  //States

  const log = (e) => {
    e.preventDefault();
    if (userName === 'default user') {
      let userInput = prompt(`What's your user name?`)
      setUserName(userInput);
      alert(`Welcome ${userInput}`);
    } else {
      alert('User already has a name');
    }
  }

  const [userInput, setUserInput] = useState('');
  const [tweets, setTweets] = useState([]);
  const [userName, setUserName] = useState('default user');
  const defaultTweet = "hello Moon!";
  // const [defaultTweet, setDefaultTweet] = useState('Hello earth!');
  // const changeDetweet = () => {
  //   setDefaultTweet = 'Hello mooon';
  // }

  return (
    <div className="App">
      <div className="main-container" >
        <div className="home" ><h1 >Welcome</h1> <h1 id="log" onClick={log}>Log in</h1></div>
        <CreateTweet userInput={userInput} setUserInput={setUserInput} tweets={tweets} setTweets={setTweets} />
        <TweetList userName={userName} defaultTweet={defaultTweet} tweets={tweets} setTweets={setTweets} />
      </div>

    </div >
  );
}

export default App;
