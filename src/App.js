import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import store from './store';
import Home from './components/Home';
import New from './components/todos/New';
import Todos from './components/todos/Index';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navbar>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="/">React-Todo-App</a>
                </Navbar.Brand>
              </Navbar.Header>
              <Nav className="pull-right">
                <NavItem eventKey={1}>
                  <Link to="/todos">
                    Todos
                  </Link>
                </NavItem>
                <NavItem eventKey={2}>
                  <Link to="/new">
                    New
                  </Link>
                </NavItem>
              </Nav>
            </Navbar>
            <Switch>
              <Route path="/" exact render={Home} />
              <Route path="/todos" exact component={Todos} />
              <Route path="/new" exact component={New} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
