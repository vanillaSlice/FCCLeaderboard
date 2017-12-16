import React from 'react';
import { Navbar } from 'react-bootstrap';

import logo from './freecodecamp_logo.svg';

import './AppHeader.css';

export default () => (
  <Navbar staticTop className="AppHeader">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="https://www.freecodecamp.org/">
          <img src={logo} alt="freeCodeCamp logo" title="freeCodeCamp logo" />
        </a>
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>
);
