import React from 'react';
import ReactDOM from 'react-dom';
import LeaderboardRow from './LeaderboardRow';

it('renders without crashing', () => {
  const tbody = document.createElement('tbody');
  ReactDOM.render(<LeaderboardRow />, tbody);
});
