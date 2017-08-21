import React, { Component } from 'react';
import './AppHeader.css';
import { Navbar } from 'react-bootstrap';
import logo from './freecodecamp_logo.svg';

class AppHeader extends Component {
  render() {
    return (
      <Navbar fixedTop className='App-Header Navbar'>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='https://www.freecodecamp.org/'>
              <img src={logo} alt='freeCodeCamp logo' />
            </a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default AppHeader;
