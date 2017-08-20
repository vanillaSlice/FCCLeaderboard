import React, { Component } from 'react';
import './Leaderboard.css';
import { Table } from 'react-bootstrap';
import LeaderboardHeader from './LeaderboardHeader';
import LeaderboardRow from './LeaderboardRow';

class Leaderboard extends Component {
  render() {
    return (
      <div className="Leaderboard">
        <LeaderboardHeader />
        <LeaderboardRow />
      </div>
    );
  }
}

export default Leaderboard;
