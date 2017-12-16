import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import Leaderboard from './Leaderboard';

/*
 * Add mock data
 */

const mock = new MockAdapter(axios);
const recent = [
  {
    username: 'rahsheen',
    img: 'https://avatars1.githubusercontent.com/u/4641959?v=4',
    alltime: 937,
    recent: 97,
  },
  {
    username: 'khaduch',
    img: 'https://avatars2.githubusercontent.com/u/1930584?v=4',
    alltime: 3267,
    recent: 87,
  },
  {
    username: 'sjames1958gm',
    img: 'https://avatars1.githubusercontent.com/u/4639625?v=4',
    alltime: 8427,
    recent: 76,
  },
];
const alltime = [
  {
    username: 'sjames1958gm',
    img: 'https://avatars1.githubusercontent.com/u/4639625?v=4',
    alltime: 8427,
    recent: 76,
  },
  {
    username: 'Manish-Giri',
    img: 'https://avatars2.githubusercontent.com/u/11348778?v=4',
    alltime: 6450,
    recent: 6,
  },
  {
    username: 'anthonygallina1',
    img: 'https://avatars.githubusercontent.com/u/11003055?v=3',
    alltime: 5445,
    recent: 33,
  },
];

mock.onGet('https://fcctop100.herokuapp.com/api/fccusers/top/recent').reply(200, recent);
mock.onGet('https://fcctop100.herokuapp.com/api/fccusers/top/alltime').reply(200, alltime);

it('renders without crashing', () => {
  shallow(<Leaderboard />);
});
