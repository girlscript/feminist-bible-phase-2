import React, { Component } from "react";
import '../css/components/input.scss';


class Input extends Component {
  render() {
    const { label, error, type, placeholder, onChange } = this.props;
    return (
      <div className="form__element-container">
        <label className="form__label required">{label}</label>
        <input className={`form__input-field ${error? 'error' : ''}`} type={type} placeholder={placeholder} onChange={onChange} />
        {error && <span className="form__input-error">{error}</span>}
      </div>       
    );
  }
}


class WithPasswordStrength extends Component {
  // vary this strength property between 1 to 4 to see changes in progress bar
  state = {
    password: '',
    strength: '0'
  }
  
  handlePasswordStrength = (e) => {
    this.setState({password: e.target.value});
    this.props.onChange(e);
    const { password } = this.state;
    if(password.length <= 4) {
      this.setState({strength: '1'});
    } else if(password.length > 4 && password.length < 6) {
      this.setState({strength: '2'});
    }
    else if(password.length >= 6 && password.length < 8) {
      this.setState({strength: '3'});
    } else if(password.length >= 8) {
      this.setState({strength: '4'});
    } else {
      this.setState({strength: '1'});
    }
  }

  render() {
    const {strength} = this.state;
    const bgcolors = ["red", "orange", "yellow", "green"];
    const strengths = ["Week", "Ok", "Medium", "Strong"]
    const { label, type, error, placeholder } = this.props;
    return (
      <div>
        <Input 
          label={label}
          type={type}
          placeholder={placeholder}
          error={error}
          onChange={this.handlePasswordStrength}
        />
        { strength > 0  ? (<div className="form__input-strength">
          <p className="result" style={{color: bgcolors[strength - 1]}}>{strengths[strength - 1]}</p>
          <div className="meter">
            <div className="strength" style={{ width: `${25*strength}%`, backgroundColor: bgcolors[strength - 1]}}>
            </div>
          </div>
        </div>) : null }
      </div>
    );
  }
}

export {Input, WithPasswordStrength};