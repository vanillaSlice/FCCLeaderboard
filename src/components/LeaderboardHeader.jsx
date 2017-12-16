import React from 'react';
import PropTypes from 'prop-types';

import './LeaderboardHeader.css';

const LeaderboardHeader = props => (
  <thead className="LeaderboardHeader">
    <tr>
      <th>#</th>
      <th>Camper Name</th>
      <th
        className={props.sortField === 'top100Last30Days' ? 'highlight clickable' : 'clickable'}
        onClick={() => props.updateSortField('top100Last30Days')}
      >
        Points in last 30 days
      </th>
      <th
        className={props.sortField === 'top100AllTime' ? 'highlight clickable' : 'clickable'}
        onClick={() => props.updateSortField('top100AllTime')}
      >
        All time points
      </th>
    </tr>
  </thead>
);

LeaderboardHeader.propTypes = {
  sortField: PropTypes.string.isRequired,
  updateSortField: PropTypes.func.isRequired,
};

export default LeaderboardHeader;
