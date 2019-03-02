import React from 'react';
import PropTypes from 'prop-types';

import './LeaderboardHeader.scss';

const LeaderboardHeader = (props) => {
  const {
    sortField,
    updateSortField,
  } = props;

  return (
    <thead className="LeaderboardHeader">
      <tr>
        <th className="position">#</th>
        <th className="camper">Camper Name</th>
        <th
          className={`recent clickable ${sortField === 'top100Last30Days' ? 'highlight' : ''}`}
          onClick={() => updateSortField('top100Last30Days')}
        >
          Points in last 30 days&nbsp;
          {
            sortField === 'top100Last30Days'
            && <span className="caret" />
          }
        </th>
        <th
          className={`alltime clickable ${sortField === 'top100AllTime' ? 'highlight' : ''}`}
          onClick={() => updateSortField('top100AllTime')}
        >
          All time points&nbsp;
          {
            sortField === 'top100AllTime'
            && <span className="caret" />
          }
        </th>
      </tr>
    </thead>
  );
};

LeaderboardHeader.propTypes = {
  sortField: PropTypes.string.isRequired,
  updateSortField: PropTypes.func.isRequired,
};

export default LeaderboardHeader;
