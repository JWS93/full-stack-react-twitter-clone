import React, { Component } from 'react';
import { 
  postTweet,
  getAllTweets,

} from './tweet_requests.js';
import Layout from './layout.jsx'

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      tweets: [],
      loadingTweets: true,
      errorTweets: null,
      postingTweets: false,
      errorPosting: null
    };
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    getAllTweets().then(response => {
      if (this._isMounted) {
        if(response.success) {
          console.log(response.data)
          this.setState({ tweets: response.data.tweets, loadingTweets: false });
        } else {
          this.setState({ errorTweets: response.errors, loadingTweets: false });
        }
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handlePostTweet = async (event) => {
    event.preventDefault();
    if (!this.state.message.trim()) return;
    this.setState({ postingTweet: true, errorPosting: null });

    postTweet(this.state.message).then(response => {
      if (this._isMounted) {
        if (response.success) {
          this.setState({
            message: '',
            postingTweet: false
          });
          getAllTweets().then(response => {
            if (this._isMounted) {
              if(response.success) {
                console.log(response.data)
                this.setState({ tweets: response.data.tweets, loadingTweets: false });
              } else {
                this.setState({ errorTweets: response.errors, loadingTweets: false });
              }
            }
          });
        } else {
          this.setState({ errorPosting: response.errors, postingTweet: false });
        }
      }
    })
  };

  handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};


  render() {
    const { tweets, message, loadingTweets, errorTweets, postingTweet, errorPosting } = this.state;

    if (loadingTweets) {
      return <h3>Loading...</h3>
    }

    if (errorTweets) {
      return <h3>Error: {errorTweets.join(', ')}</h3>
    }

    return (
      <Layout>
        {loadingTweets ? (
          <p>Loading tweets...</p>
        ) : errorTweets ? (
          <p>Error: {errorTweets.join(', ')}</p>
        ) : (
          <div>
            {tweets.map(tweet => (
              <div key={tweet.id}>
                <p><strong>{tweet.username}</strong>: {tweet.message}</p>
              </div>
            ))}
          </div>
        )}
        <form onSubmit={this.handlePostTweet}>
          <input
            type="text"
            value={message}
            onChange={this.handleChange}
            name="message"
            placeholder="What's happening?"
            disabled={postingTweet}
          />
          <button type="submit" disabled={postingTweet}>
            {postingTweet ? 'Posting...' : 'Post Tweet'}
          </button>
        </form>
        {errorPosting && <p>Error posting: {errorPosting.join(', ')}</p>}
      </Layout>
    );
  }
}

export default Feed;