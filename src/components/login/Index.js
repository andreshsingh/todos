import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Grid, FormGroup, Button, ControlLabel, FormControl } from 'react-bootstrap';

import { loginToRails } from './../actions/loginAction';

class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      email: '',
      password: '',
    };
  }

  validateForm = () => {
    const validateEmail = this.getValidationEmail();
    const validatePassword = this.getValidationPassword();
    if (validateEmail === 'success' && validatePassword === 'success') return true;
    return false;
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitForm = (e) => {
    e.preventDefault();
    const isValid = this.validateForm();
    isValid === true
      ? this.props.loginToRails({ email: this.state.email, password: this.state.password })
      : console.log('invalid')
  }

  getValidationEmail() {
    if (this.state.email.length === 0) return null;
    let indexOfAt = this.state.email.indexOf('@');
    let mailProvider = this.state.email.split('@').pop();
    let indexOfDot = mailProvider.indexOf('.');
    if (indexOfAt > -1 && indexOfDot > -1) return 'success';
    return 'error';
  }

  getValidationPassword() {
    if (this.state.password.length > 7) return 'success';
    return 'error';
  }

  componentDidMount() {
    this.props.token !== ''
      ? this.props.history.push('/todos')
      : console.log('no token');
  }

  componentWillReceiveProps(newProps) {
    newProps.token !== ''
      ? this.props.history.push('/todos')
      : console.log('no token');
  }

  render() {
    return (
      <Grid>
        <form>
          <div className="col-md-6 col-md-offset-3">
            <FormGroup controlId='signUpEmail'
              validationState={this.getValidationEmail()}>
              <ControlLabel>Email:</ControlLabel>
              <FormControl
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange} />
            </FormGroup>

            <FormGroup controlId='signUpPassword'
              validationState={this.getValidationPassword()}>
              <ControlLabel>Password</ControlLabel>
              <FormControl
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange} />
            </FormGroup>

            <Button type="submit" onClick={this.submitForm}>Login</Button>
          </div>
        </form>
      </Grid >
    )
  }
}

const mapStateToProps = state => ({
  token: state.loginCredentials.token.jwt
})


export default connect(mapStateToProps, { loginToRails })(Login);
