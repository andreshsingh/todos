import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import { logOut } from './../actions/loginAction';

class NavBar extends Component {
  logout = () => {
    this.props.logOut();
  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                React-Todo-App
              </Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav className="pull-right">
            <NavItem componentClass={Link} href="/todos" to="/todos">Todos</NavItem>
            <NavItem componentClass={Link} href="/todos/new" to="/todos/new">New</NavItem>
            <NavItem onClick={this.logout}>Logout</NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default connect(null, { logOut })(NavBar);
