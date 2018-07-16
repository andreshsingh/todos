import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import store from './store';
import Home from './components/Home';
import New from './components/todos/New';
import Todos from './components/todos/Index';
import SignUp from './components/signUp/index';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
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
                <NavItem componentClass={Link} href="/signUp" to="/signUp">SignUp</NavItem>
              </Nav>
            </Navbar>
            <Switch>
              <Route path="/" exact render={Home} />
              <Route path="/todos" exact component={Todos} />
              <Route path="/new" exact component={New} />
              <Route path="/signUp" exact component={SignUp} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
