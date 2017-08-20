import React from 'react';
import ReactDOM from 'react-dom';
import LeaderboardHeader from './LeaderboardHeader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LeaderboardHeader />, div);
});
