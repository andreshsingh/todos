import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class NavBar extends Component {
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
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default NavBar;
