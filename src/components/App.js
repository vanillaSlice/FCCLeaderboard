import React, { Component } from 'react';
import AppHeader from './AppHeader';
import Leaderboard from './Leaderboard';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <AppHeader />
        <Leaderboard />
      </div>
    );
  }
}

export default App;
