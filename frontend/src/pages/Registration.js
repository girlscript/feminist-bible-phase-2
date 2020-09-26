import React, { Component } from 'react'
import '../css/pages/registration.scss';
import { Input, WithPasswordStrength } from '../components/input';
import { Link } from 'react-router-dom';

export default class Registration extends Component {
  state = {
    email: '',
    password: '',
    cpassword: '',
    errors: {
      email: '',
      password: '',
      cpassword: ''
    }
  };


  registerHandler = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ ...prevState, errors: { email: '', password: '', cpassword: '' } }))
    // validation
    const { email, password, cpassword } = this.state;
    // email
    const emailTest = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailTest.test(email)) {
      this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, email: 'Email is not valid.' } }));
      return;
    }
    // password
    if (!password) {
      this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, password: 'Password cannot be empty' } }));
      return;
    }
    if (password.length < 6) {
      this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, password: 'Password length must be atleast 6 characters.' } }));
      return;
    }
    if (password !== cpassword) {
      this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, cpassword: 'Passwords do not match.' } }));
      return;
    }
    // registeration logic
    alert('registered.')
  }

  changeHandler = e => {
    e.persist();
    this.setState(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  }


  render() {
    const { errors } = this.state;
    return (
      <>
      <div className="registration-page">
        <div className="grid-container">
          <div className="grid-x align-middle">
            <div className="cell large-4 medium-4">
              <h2 className="registration-page__title">Register</h2>
              <form onSubmit={this.registerHandler} className="registration-page__form">
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  placeholder="username@example.com"
                  onChange={this.changeHandler}
                  error={errors.email}
                />
                <WithPasswordStrength
                  label="Create Password"
                  type="password"
                  placeholder=""
                  name="password"
                  onChange={this.changeHandler}
                  error={errors.password}
                />
                <Input
                  label="Confirm Password"
                  type="password"
                  placeholder=""
                  name="cpassword"
                  onChange={this.changeHandler}
                  error={errors.cpassword}
                />
                <button className="button__big">Register</button>
              </form>
              <Link>Already have an account? <span style={{color: '#2F80ED'}}>Login here</span>.</Link>
            </div>
            <div className="cell large-8">
              <div className="registration-page__illustration-wrapper">
                <img src={require('../images/women.png')} className="registration-page__illustration" alt="Illustration of women"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}
