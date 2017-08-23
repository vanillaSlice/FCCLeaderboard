import React, { Component } from 'react';
import '../styles/AppHeader.css';
import { Navbar } from 'react-bootstrap';
import logo from '../assets/freecodecamp_logo.svg';

class AppHeader extends Component {
  render() {
    return (
      <Navbar fixedTop className='AppHeader Navbar'>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='https://www.freecodecamp.org/'>
              <img src={logo} alt='freeCodeCamp logo' title='freeCodeCamp logo' />
            </a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default AppHeader;
