import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from './store';
import Home from './components/Home';
import New from './components/todos/New';
import Todos from './components/todos/Index';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  async deleteTodo(todo) {
    try {
      let resp = await (await fetch('http://127.0.0.1:3001/todos/' + todo.id + '.json', {
        credentials: 'same-origin',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'content-type': 'application/json'
        },
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
      })).json();
      let todos = this.state.todos;
      let newTodos = todos.filter(todo => todo.id !== resp.id);
      this.setState({ todos: newTodos });
    } catch (e) {
      console.log(e);
    }
  }

  async updateTodo(todo) {
    try {
      let resp = await (await fetch('http://127.0.0.1:3001/todos/' + todo.id + '.json', {
        body: JSON.stringify(todo), // must match 'Content-Type' header
        credentials: 'same-origin',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'content-type': 'application/json'
        },
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
      })).json();
      let todos = this.state.todos;
      let index = todos.findIndex(x => x.id === resp.id);
      todos[index] = todo;
      this.setState({ todos });
    } catch (e) {
      console.log(e);
    }
  }

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
                <NavItem eventKey={1} href="/todos">
                  Todos
              </NavItem>
                <NavItem eventKey={2} href="/new">
                  New
              </NavItem>
              </Nav>
            </Navbar>
            <Switch>
              <Route path="/" exact render={Home} />
              <Route path="/todos" exact render={
                props => <Todos {...props} deleteTodo={this.deleteTodo.bind(this)} updateTodo={this.updateTodo.bind(this)} />
              } />
              <Route path="/new" exact component={props => <New {...props} />} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
