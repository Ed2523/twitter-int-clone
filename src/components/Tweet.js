import React, { useState } from 'react';
import '../styles/tweet.css'

const Tweet = ({ userName, tweetObject, tweets, setTweets }) => {
    //States
    const [tweetLike, setTweetLike] = useState('Like');
    const [tweetDislike, setTweetDislike] = useState('Dislike');
    /*const changeName = () => {
        if (name === 'Ed') {
            setName('edgar')
        }
        else {
            setName('Ed')
        }
        console.log(name);
    }*/
    const deleteTweet = (e) => {
        //filter or maps goes through all the elements in tweets
        //remember that filter and maps are array functions that go through all the elements indise of the array
        //tweetObject is the tweet that trigger the deleteTweet function
        //tweetState is each individual element object inside tweets array
        /* tweetState.id !== tweetObject.id: this compares if the property id 
        of the tweet that triggered the deleteTweet function is not the same as the id property of
        any of the elements object inside tweets array, if any of the elements object 
        id properties inside the tweets array is
        the same as the tweetObject.id, then that tweet element gets deleted from the array.
      */
        setTweets(tweets.filter((eachTweetObjectInsideTweets) => eachTweetObjectInsideTweets.id !== tweetObject.id));
    }
    const tweetButtonEffect = (e) => {


        switch (e.target.innerHTML) {
            case 'Like':
                e.target.classList.add('liked');
                setTweetLike('Liked');
                break;
            case 'Liked':
                e.target.classList.remove('liked');
                setTweetLike('Like');
                break;
            case 'Dislike':
                e.target.classList.add('disliked');
                setTweetDislike('Disliked');
                break;
            case 'Disliked':
                e.target.classList.remove('disliked');
                setTweetDislike('Dislike');
                break;
            default:
                console.log('something went wrong');
        }



        // if (e.target.innerHTML === 'Like') {
        //     e.target.innerHTML = 'Liked';
        //     e.target.classList.add('liked')
        // } else {
        //     e.target.innerHTML = 'Like';
        //     e.target.classList.remove('liked')
        // }


    }
    return (
        <div>
            <h2>{userName}</h2>
            <h3>{tweetObject.text}</h3>
            <div className="tweet-buttons-container">
                <button onClick={tweetButtonEffect} className='tweet-button'>{tweetLike}</button>
                <button onClick={tweetButtonEffect} className='tweet-button'>{tweetDislike}</button>
                <button onClick={deleteTweet} className='tweet-button delete'>Delete</button>
            </div>

        </div>
    )
}

export default Tweet;