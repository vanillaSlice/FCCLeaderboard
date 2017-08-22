import React, { Component } from 'react';
import '../styles/LeaderboardRow.css';

class LeaderboardRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.position}</td>
        <td>
          <img width='30' src={this.props.camper.img} alt={this.props.camper.username + '\'s avatar'} />
          {this.props.camper.username}
        </td>
        <td>{this.props.camper.recent}</td>
        <td>{this.props.camper.alltime}</td>
      </tr>
    );
  }
}

export default LeaderboardRow;
