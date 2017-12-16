import React from 'react';
import PropTypes from 'prop-types';

import './LeaderboardHeader.css';

const LeaderboardHeader = props => (
  <thead className="LeaderboardHeader">
    <tr>
      <th className="position">#</th>
      <th className="camper">Camper Name</th>
      <th
        className={`recent clickable ${props.sortField === 'top100Last30Days' ? 'highlight' : ''}`}
        onClick={() => props.updateSortField('top100Last30Days')}
      >
        Points in last 30 days&nbsp;
        {
          props.sortField === 'top100Last30Days' &&
          <span className="caret" />
        }
      </th>
      <th
        className={`alltime clickable ${props.sortField === 'top100AllTime' ? 'highlight' : ''}`}
        onClick={() => props.updateSortField('top100AllTime')}
      >
        All time points&nbsp;
        {
          props.sortField === 'top100AllTime' &&
          <span className="caret" />
        }
      </th>
    </tr>
  </thead>
);

LeaderboardHeader.propTypes = {
  sortField: PropTypes.string.isRequired,
  updateSortField: PropTypes.func.isRequired,
};

export default LeaderboardHeader;
