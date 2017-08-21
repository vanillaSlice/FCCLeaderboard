import React, { Component } from 'react';
import './LeaderboardHeader.css';

class LeaderboardHeader extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th colSpan='4'>Leaderboard</th>
        </tr>
        <tr>
          <th>#</th>
          <th>Camper Name</th>
          <th>Points in last 30 days</th>
          <th>All time points</th>
        </tr>
      </thead>
    );
  }
}

export default LeaderboardHeader;
