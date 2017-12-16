import React from 'react';
import PropTypes from 'prop-types';

import './LeaderboardRow.css';

const LeaderboardRow = props => (
  <tr className="LeaderboardRow">
    <td>{props.position}</td>
    <td>
      <a href={`https://www.freecodecamp.org/${props.camper.username}`}>
        <img
          width="30"
          src={props.camper.img}
          alt={`${props.camper.username}'s avatar`}
          title={`${props.camper.username}'s avatar`}
        />
        {props.camper.username}
      </a>
    </td>
    <td>{props.camper.recent}</td>
    <td>{props.camper.alltime}</td>
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
