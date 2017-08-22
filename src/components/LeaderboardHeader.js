import React, { Component } from 'react';
import '../styles/LeaderboardHeader.css';

class LeaderboardHeader extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th>#</th>
          <th>Camper Name</th>
          <th className={this.props.sortField === 'last30Days' ? 'highlight' : ''} onClick={() =>  
            this.props.setSortField('last30Days')}>Points in last 30 days</th>
          <th className={this.props.sortField === 'allTime' ? 'highlight' : ''} onClick={() =>  
            this.props.setSortField('allTime')}>All time points</th>
        </tr>
      </thead>
    );
  }
}

export default LeaderboardHeader;
