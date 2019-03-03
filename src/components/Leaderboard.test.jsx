import React from 'react';
import { mount } from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import Leaderboard from './Leaderboard';

import latest from './latest-test-data.json';

/*
 * Add mock data
 */

const mock = new MockAdapter(axios);

mock.onGet('https://cors-anywhere.herokuapp.com/https://www.freecodecamp.org/forum/latest.json').reply(200, latest);

it('renders without crashing', () => {
  mount(<Leaderboard />);
});
