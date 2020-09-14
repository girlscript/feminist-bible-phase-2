import React, { Component } from "react";
import '../css/components/input.scss';

// Error for testing purpose
// for displaying error state
// const error = 'Error Mesaage from somewhere.';
// for not displaying error
const error = '';

class Input extends Component {

  handlePasswordChange = (e) => {
    if(this.props.handlePasswordStrength) {
      this.props.handlePasswordStrength(e.target.value);
    }
  }

  render() {
    return (
      <div className="form__element-container">
        <label className="form__label required">Email Address</label>
        <input className={`form__input-field ${error? 'error' : ''}`} type="text" placeholder="username@example.com" onChange={this.handlePasswordChange} />
        {error && <span className="form__input-error">{error}</span>}
      </div>       
    );
  }
}


class WithPasswordStrength extends Component {
  // vary this strength property between 1 to 4 to see changes in progress bar
  state = {
    password: '',
    strength: '4'
  }
  
  handlePasswordStrength = password => {
    this.setState({password});
  }

  render() {
    const {strength} = this.state;
    const bgcolors = ["red", "orange", "yellow", "green"];
    const strengths = ["Week", "Ok", "Medium", "Strong"]

    return (
      <div>
        <Input handlePasswordStrength={this.handlePasswordStrength} />
        <div className="form__input-strength">
          <p className="result" style={{color: bgcolors[strength - 1]}}>{strengths[strength - 1]}</p>
          <div className="meter">
            <div className="strength" style={{ width: `${25*strength}%`, backgroundColor: bgcolors[strength - 1]}}>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export {Input, WithPasswordStrength};