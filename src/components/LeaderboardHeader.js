import React, { Component } from 'react';
import '../styles/LeaderboardHeader.css';

class LeaderboardHeader extends Component {
  render() {
    return (
      <thead className='LeaderboardHeader'>
        <tr>
          <th>#</th>
          <th>Camper Name</th>
          <th className={this.props.sortField === 'top100Last30Days' ? 'highlight clickable' : 'clickable'} 
            onClick={() => this.props.updateSortField('top100Last30Days')}>Points in last 30 days</th>
          <th className={this.props.sortField === 'top100AllTime' ? 'highlight clickable' : 'clickable'}
           onClick={() => this.props.updateSortField('top100AllTime')}>All time points</th>
        </tr>
      </thead>
    );
  }
}

export default LeaderboardHeader;
