import React, { Component } from 'react';

import './NavBar.scss';

import classNames from 'classnames';
import { Nav } from 'react-bootstrap';

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeKey: ''
    };
  }

  setActiveKey = activeKey => {
    this.setState({activeKey});
  }

  render () {

    const navItemClassName = classNames({
      'active': this.state.activeKey
    });

    return (
      <Nav
        activeKey="/"
        onSelect={ selectedKey => this.setActiveKey(selectedKey) }
      >
        <Nav.Item className="ml-5">
          <Nav.Link className={this.state.active === 'homeKey' ? navItemClassName : ''} href="/" eventKey="homeKey">
            <i className="fas fa-home" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about" eventKey="workKey">
            About
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default NavBar;
