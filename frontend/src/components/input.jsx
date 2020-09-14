import React, { Component } from "react";
import '../css/components/input.scss';

class Input extends Component {
  render() {
    return (
      <div className="form__element-container">
        <label className="form__label required">Email Address</label>
        <input className="form__input-field" type="text" placeholder="username@example.com" />
      </div>       
    );
  }
}

export default Input;
