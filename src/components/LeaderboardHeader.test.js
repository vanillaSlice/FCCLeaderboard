import React from 'react';
import ReactDOM from 'react-dom';
import LeaderboardHeader from './LeaderboardHeader';

it('renders without crashing', () => {
  const table = document.createElement('table');
  ReactDOM.render(<LeaderboardHeader />, table);
});
