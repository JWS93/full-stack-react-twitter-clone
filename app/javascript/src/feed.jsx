import React, { Component } from 'react';

class Feed extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>testing, {user.username}</div>
    );
  }
}

export default Feed;