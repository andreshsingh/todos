import { connect } from 'react-redux';
import React, { Component } from 'react';

import New from './todos/New';
import Todos from './todos/Index';
import Navbar from './layout/Navbar';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Comp, token: token, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      token !== ''
        ? <Comp {...props} />
        : <Redirect to="/login" />
    )}
    />
  )
}

class PrivatePages extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <PrivateRoute path="/todos" exact component={Todos} token={this.props.token} />
        <PrivateRoute path="/todos/new" exact component={New} token={this.props.token} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  token: state.loginCredentials.token.jwt
})

export default connect(mapStateToProps, {})(PrivatePages);
