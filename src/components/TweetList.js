import React from 'react';
import Tweet from './Tweet';
import '../styles/TweetList.css';

const TweetList = ({ userName, tweets, setTweets }) => {

    return (
        <div className="TweetList">
            {/* <Tweet name={name} setName={setName} defaultTweet={defaultTweet} tweets={tweets} /> */}

            {tweets.map(
                //tweets is an object array, tweet is each object inside. tweet has a property tweetText
                //remember that filter and maps are array functions that go through all the elements indise of the array
                /*<Tweet /> and  tweetObject are not the same,  the first is a component,
                 the second one is an object with information that is going to be shown in the 
                 <Tweet /> component
                */
                /*key is value you need to identify a unique component from a multiple
                of instances of the same component, in this case  <Tweet />, in this context 
                i say instance as a way of refering to a list of the same components.
                  */
                (tweetObject) => (
                    <Tweet
                        userName={userName}
                        tweetObject={tweetObject}
                        setTweets={setTweets}
                        tweets={tweets}
                        key={tweetObject.id}
                    />
                )
            )}

        </div>
    )
}

export default TweetList;