import React, { Component } from 'react'
import { Input, WithPasswordStrength } from '../../components/Input/index';
import { Link } from 'react-router-dom';
//import Axios from "axios";

import style from './registration.module.scss'

const womenImg = require('../../images/women.png').default;

export class Registration extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    password: '',
    cpassword: '',
    errors: {
      name: '',
      email: '',
      phone: '',
      password: '',
      cpassword: ''
    }
  };


  registerHandler = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ ...prevState, errors: { email: '', password: '', cpassword: '' } }))
    // validation
    const { name, email, phone, password, cpassword } = this.state;
    //name
    if (!name) {
      this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, name: 'Name cannot be empty' } }));
      return;
    }
    // email
    const emailTest = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailTest.test(email)) {
      this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, email: 'Email is not valid.' } }));
      return;
    }
    if(!phone || phone.length < 10) {
      this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, phone: 'Mobile No. cannot be empty or less than 10 digits.' } }));
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
    this.registerUser();
  }

  changeHandler = e => {
    e.persist();
    this.setState(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  }

  registerUser = async (user) => {
    // add user to backend
    try {
     // const { name, email, phone, password, cpassword: passwordConfirm} = this.state;
      // const res = await Axios({
      //   url: "/api/auth/signup",
      //   method: "POST",
      //   data:  {
      //     name,
      //     email,
      //     phone,
      //     password,
      //     passwordConfirm
      //   }
      // });
      alert("Registered...")
    } catch (error) {
      alert(`Something went wrong! \n ${error.response.data.msg}`)
    }
  }


  render() {
    const { errors } = this.state;
    return (
      <>
      <div className={style["registration-page"]}>
        <div className="grid-container">
          <div className="grid-x align-middle">
            <div className="cell large-4 medium-4">
              <h2 className={style["registration-page__title"]}>Register</h2>
              <form onSubmit={this.registerHandler} className={style["registration-page__form"]}>
                <Input
                  label="Name"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  onChange={this.changeHandler}
                  error={errors.name}
                />
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  placeholder="username@example.com"
                  onChange={this.changeHandler}
                  error={errors.email}
                />
                <Input
                  label="Mpbile Number"
                  type="tel"
                  name="phone"
                  placeholder="+91 8563214752"
                  onChange={this.changeHandler}
                  error={errors.phone}
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
                <button className={style["button__big"]}>Register</button>
              </form>
              <Link>Already have an account? <span style={{color: '#2F80ED'}}><Link to="/login">Login here</Link></span>.</Link>
            </div>
            <div className="cell large-8">
              <div className={style["registration-page__illustration-wrapper"]}>
                <img src={womenImg} className="registration-page__illustration" alt="Illustration of women"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}
