import React from 'react';
import { shallow } from 'enzyme';

import LeaderboardHeader from './LeaderboardHeader';

it('calls function on sort field click', () => {
  const sortField = 'top100Last30Days';
  const updateSortField = jest.fn();

  const wrapper = shallow(<LeaderboardHeader
    sortField={sortField}
    updateSortField={updateSortField}
  />);

  const recent = wrapper.find('.recent');
  const alltime = wrapper.find('.alltime');

  recent.simulate('click');

  expect(updateSortField).toHaveBeenCalledWith('top100Last30Days');

  alltime.simulate('click');

  expect(updateSortField).toHaveBeenCalledWith('top100AllTime');
});
