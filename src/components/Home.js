import { Grid } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <p>This is a react Todo App.</p>
        <p>You must login to see todos.</p>
        <Link to="/login">
          Login
      </Link>
      </Grid>
    )
  }
}
