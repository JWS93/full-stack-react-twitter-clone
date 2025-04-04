import React, { Component } from 'react';
import Login from './login';
import Feed from './feed';
import { createRoot } from 'react-dom/client';

class Home extends Component {
  state = {
    user: null,
  };

  setUser = (user) => {
    this.setState({ user });
  };

  render() {
    return (
      <div>
        {this.state.user ? (
          <Feed user={this.state.user} />
        ) : (
          <Login setUser={this.setUser} />
        )}
      </div>
    );
  }
}

export default Home;


document.addEventListener('DOMContentLoaded', () => {
  const node = document.body.appendChild(document.createElement('div'));
  const root = createRoot(node);
  root.render(<Home />);
});