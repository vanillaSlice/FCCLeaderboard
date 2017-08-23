import React, { Component } from 'react';
import '../styles/LeaderboardRow.css';

class LeaderboardRow extends Component {
  render() {
    return (
      <tr className='LeaderboardRow'>
        <td>{this.props.position}</td>
        <td>
          <a href={'https://www.freecodecamp.org/' + this.props.camper.username}>
            <img width='30' src={this.props.camper.img} alt={this.props.camper.username + '\'s avatar'}
            title={this.props.camper.username + '\'s avatar'} />
            {this.props.camper.username}
          </a>
        </td>
        <td>{this.props.camper.recent}</td>
        <td>{this.props.camper.alltime}</td>
      </tr>
    );
  }
}

export default LeaderboardRow;
