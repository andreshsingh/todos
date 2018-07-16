import React, { Component } from 'react';
import { Grid, FormGroup, Button, ControlLabel, FormControl } from 'react-bootstrap';


export default class signUp extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      email: '',
      lastName: '',
      password: '',
      firstName: '',
      confirmPassword: '',
    };
  }

  validateForm = () => {
    const validateEmail = this.getValidationEmail();
    const validateFirstName = this.getValidationFirstName();
    const validateLastName = this.getValidationLastName();
    const validatePassword = this.getValidationPassword();
    const validateConfirmPassword = this.getValidationConfirmPassword();
    if (validateEmail === 'success' && validateFirstName === 'success' && validateLastName === 'success' && validatePassword === 'success' && validateConfirmPassword === 'success') return true;
    return false;
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitForm = (e) => {
    e.preventDefault();
    const isValid = this.validateForm();
    console.log(isValid);
  }

  getValidationEmail() {
    if (this.state.email.length === 0) return null;
    let indexOfAt = this.state.email.indexOf('@');
    let mailProvider = this.state.email.split('@').pop();
    let indexOfDot = mailProvider.indexOf('.');
    if (indexOfAt > -1 && indexOfDot > -1) return 'success';
    return 'error';
  }

  getValidationFirstName() {
    if (this.state.firstName.length > 0) return 'success';
    return 'error';
  }

  getValidationLastName() {
    if (this.state.lastName.length > 0) return 'success';
    return 'error';
  }

  getValidationPassword() {
    if (this.state.password.length > 7) return 'success';
    return 'error';
  }

  getValidationConfirmPassword() {
    if (this.state.password === this.state.confirmPassword && this.state.confirmPassword.length > 7) return 'success';
    return 'error';
  }

  render() {
    return (
      <Grid>
        <form>
          <div className="col-md-6 col-md-offset-3">
            <FormGroup controlId='signUpFirstName'
              validationState={this.getValidationFirstName()}>
              <ControlLabel>First Name:</ControlLabel>
              <FormControl
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange} />
            </FormGroup>

            <FormGroup controlId='signUpLastName'
              validationState={this.getValidationLastName()}>
              <ControlLabel>Last Name:</ControlLabel>
              <FormControl
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange} />
            </FormGroup>

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

            <FormGroup controlId='signUpConfirmPassword'
              validationState={this.getValidationConfirmPassword()}>
              <ControlLabel>Confirm Password</ControlLabel>
              <FormControl
                type="password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleChange} />
            </FormGroup>

            <Button type="submit" onClick={this.submitForm}>Sign Up</Button>
          </div>
        </form>
      </Grid >
    );
  }
}
