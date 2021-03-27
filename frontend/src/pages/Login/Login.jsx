import React, { Component } from "react";
import { Input, /*WithPasswordStrength*/ } from "../../components/Input/index.js";
import { Link } from "react-router-dom";
import { InputGroup } from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

//import Axios from "axios";

import style from './login.module.scss'

const womenImg = require("../../images/women.png").default;

export class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {
      email: "",
      password: "",
    },
    showPassword: false, // added for toggle password-visibility feature
  };

  registerHandler = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      errors: { email: "", password: "" },
    }));
    // validation
    const { email, password } = this.state;

    // email
    const emailTest = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailTest.test(email)) {
      this.setState((prevState) => ({
        ...prevState,
        errors: { ...prevState.errors, email: "Email is not valid." },
      }));
      return;
    }

    // password
    if (!password) {
      this.setState((prevState) => ({
        ...prevState,
        errors: { ...prevState.errors, password: "Password cannot be empty" },
      }));
      return;
    }
    if (password.length < 6) {
      this.setState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          password: "Password length must be atleast 6 characters.",
        },
      }));
      return;
    }
    this.loginUser();
  };

  changeHandler = (e) => {
    e.persist();
    this.setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  loginUser = async (user) => {
    // add user to backend
    try {
      // const {
      //   email,
      //   password,
      // } = this.state;
      // const res = await Axios({
      //   url: "/api/auth/signin",
      //   method: "POST",
      //   data: {
      //     email,
      //     password,
      //   },
      // });
      alert("LoggedIN...");
    } catch (error) {
      alert(`Something went wrong! \n ${error.response.data.msg}`);
    }
  };
  togglePasswordVisiblity = () => { // to handle visibility of passsword 
    this.setState({
      showPassword: !(this.state.showPassword)
    });
  };

  render() {
    const { errors } = this.state;
    return (
      <>
        <div className={style["login-page"]}>
          <div className="grid-container">
            <div className="grid-x align-middle">
              <div className="cell large-4 medium-4">
                <h2 className={style["login-page__title"]}>Login</h2>
                <form
                  onSubmit={this.registerHandler}
                  className={style["login-page__form"]}
                >
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    placeholder="username@example.com"
                    onChange={this.changeHandler}
                    error={errors.email}
                  />
                  
                  <InputGroup>
                    <Input
                      label="Create Password"
                      type={this.state.showPassword?"text":"password"}
                      placeholder="************"
                      name="password"
                      onChange={this.changeHandler}
                      error={errors.password}
                    />
                    <InputGroup.Append style={{paddingTop: "20px"}}>
                      <InputGroup.Text style={{borderColor: "#ffc107", height: "37px", width: "28px", paddingLeft:"1px",paddingRight:"1px" }}>
                        <IconButton style={{width: "25px"}}
                          onClick={this.togglePasswordVisiblity}
                        >
                          {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton> 
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                  
                  <button className={style["button__big"]}>Login</button>
                </form>
                <Link>
                  Don't have an account?{" "}
                  <span style={{ color: "#2F80ED" }}><Link to="/register">Register here</Link></span>.
                </Link>
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
    );
  }
}

