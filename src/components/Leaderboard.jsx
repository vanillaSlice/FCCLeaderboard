import React, { Component } from 'react';
import axios from 'axios';
import {
  Col,
  Grid,
  Row,
  Table,
} from 'react-bootstrap';

import LeaderboardHeader from './LeaderboardHeader';
import LeaderboardRow from './LeaderboardRow';

import './Leaderboard.scss';

function getTop100Last30Days() {
  return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
}

function getTop100AllTime() {
  return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
}

class Leaderboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      top100Last30Days: [],
      top100AllTime: [],
      sortField: 'top100AllTime',
    };

    this.getCamperData = this.getCamperData.bind(this);
    this.updateSortField = this.updateSortField.bind(this);
  }

  componentDidMount() {
    this.getCamperData();
  }

  getCamperData() {
    axios
      .all([getTop100Last30Days(), getTop100AllTime()])
      .then(axios.spread((last30Days, allTime) => {
        this.setState(prevState => ({
          top100Last30Days: [...last30Days.data],
          top100AllTime: [...allTime.data],
          sortField: prevState.sortField,
        }));
      }))
      .catch(error => window.console.error(error));
  }

  updateSortField(sortField) {
    this.setState(prevState => ({
      top100Last30Days: prevState.top100Last30Days,
      top100AllTime: prevState.top100AllTime,
      sortField,
    }));
  }

  render() {
    const { sortField } = this.state;
    const { [sortField]: l } = this.state;

    return (
      <Grid className="Leaderboard">
        <Row>
          <Col xs={12} md={10} mdOffset={1}>
            <Table striped bordered responsive>
              <caption>Leaderboard</caption>
              <LeaderboardHeader
                sortField={sortField}
                updateSortField={this.updateSortField}
              />
              <tbody>
                {l.map((c, i) => <LeaderboardRow position={i + 1} key={c.username} camper={c} />)}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Leaderboard;
