import React, { Component } from 'react';
import './Leaderboard.css';
import axios from 'axios';
import LeaderboardHeader from './LeaderboardHeader';
import LeaderboardRow from './LeaderboardRow';
import { Grid, Row, Col, Table } from 'react-bootstrap';

class Leaderboard extends Component {
  state = {
    top100Last30Days: [],
    top100AllTime: []
  };

  componentDidMount() {
    this.getCamperData();
  }

  getCamperData() {
    axios.all([this.getTop100Last30Days(), this.getTop100AllTime()])
      .then(axios.spread((last30Days, allTime) => {
        this.setState({
          top100Last30Days: [...last30Days.data],
          top100AllTime: [...allTime.data]
        });
      }))
      .catch(error => console.error(error));
  }

  getTop100Last30Days() {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
  }
  
  getTop100AllTime() {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
  }

  render() {
    return (
      <Grid className='Leaderboard'>
        <Row className='show-grid'>
          <Col xs={12} md={10} mdOffset={1}>
            <Table striped bordered condensed>
              <LeaderboardHeader />
              <tbody>
                {this.state.top100AllTime.map((camper, i) => 
                <LeaderboardRow position={i + 1} key={i} camper={camper} />)}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Leaderboard;
