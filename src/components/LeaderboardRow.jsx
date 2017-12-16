import React from 'react';
import PropTypes from 'prop-types';

import './LeaderboardRow.css';

const LeaderboardRow = props => (
  <tr className="LeaderboardRow">
    <td className="position">{props.position}</td>
    <td className="camper">
      <a href={`https://www.freecodecamp.org/${props.camper.username}`}>
        <img
          className="avatar"
          width="30"
          src={props.camper.img}
          alt={`${props.camper.username}'s avatar`}
          title={`${props.camper.username}'s avatar`}
        />
        {props.camper.username}
      </a>
    </td>
    <td className="recent">{props.camper.recent}</td>
    <td className="alltime">{props.camper.alltime}</td>
  </tr>
);

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
