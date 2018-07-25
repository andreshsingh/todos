import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';

import store from './store';
import LandingPage from './components/Home';
// import New from './components/todos/New';
// import Todos from './components/todos/Index';
import Login from './components/login/Index';
import SignUp from './components/signUp/Index';
import Navbar from './components/layout/Navbar';
import PrivatePages from './components/PrivatePages';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/login" exact component={Login} />
              <Route path="/todos" component={PrivatePages} />
              <Route path="/signUp" exact component={SignUp} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
