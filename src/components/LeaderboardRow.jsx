import React from 'react';
import PropTypes from 'prop-types';

import './LeaderboardRow.scss';

const LeaderboardRow = (props) => {
  const {
    position,
    camper,
  } = props;

  return (
    <tr className="LeaderboardRow">
      <td className="position">{position}</td>
      <td className="camper">
        <a href={`https://www.freecodecamp.org/${camper.username}`}>
          <img
            className="avatar"
            width="30"
            src={camper.img}
            alt={`${camper.username}'s avatar`}
            title={`${camper.username}'s avatar`}
          />
          {camper.username}
        </a>
      </td>
      <td className="recent">{camper.recent}</td>
      <td className="alltime">{camper.alltime}</td>
    </tr>
  );
};

LeaderboardRow.propTypes = {
  position: PropTypes.number.isRequired,
  camper: PropTypes.shape({
    img: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    recent: PropTypes.number.isRequired,
    alltime: PropTypes.number.isRequired,
  }).isRequired,
};

export default LeaderboardRow;
