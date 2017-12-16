import React from 'react';
import { shallow } from 'enzyme';

import LeaderboardRow from './LeaderboardRow';

it('renders camper information', () => {
  const position = 1;
  const camper = {
    img: 'www.example.com',
    username: 'example',
    recent: 10,
    alltime: 100,
  };

  const wrapper = shallow(<LeaderboardRow position={position} camper={camper} />);

  expect(wrapper.find('.position').text()).toBe('1');
  expect(wrapper.find('.avatar').prop('src')).toBe('www.example.com');
  expect(wrapper.find('.camper').text()).toBe('example');
  expect(wrapper.find('.recent').text()).toBe('10');
  expect(wrapper.find('.alltime').text()).toBe('100');
});
