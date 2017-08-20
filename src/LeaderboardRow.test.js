import React from 'react';
import ReactDOM from 'react-dom';
import LeaderboardRow from './LeaderboardRow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LeaderboardRow />, div);
});
