import React, { Component } from "react";

import style from './input.module.scss'

class Input extends Component {
  render() {
    const { label, error, type, name, placeholder, onChange } = this.props;
    return (
      <div className={style["form__element-container"]}>
        <label className={style["form__label required"]}>{label}</label>
        <input name={name} className={`${style["form__input-field"]} ${error? 'error' : ''}`} type={type} placeholder={placeholder} onChange={onChange} />
        {error && <span className={style["form__input-error"]}>{error}</span>}
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
    this.props.onChange(e);
  }

  render() {
    const {strength} = this.state;
    const bgcolors = ["red", "orange", "#dfdf00", "green"];
    const strengths = ["Week", "Ok", "Medium", "Strong"]
    const { label, type, error, name, placeholder } = this.props;
    return (
      <div>
        <Input 
          label={label}
          type={type}
          placeholder={placeholder}
          name={name}
          error={error}
          onChange={this.handlePasswordStrength}
        />
        { strength > 0  ? (<div className="form__input-strength">
          <p className={style["result"]} style={{color: bgcolors[strength - 1]}}>{strengths[strength - 1]}</p>
          <div className={style["meter"]}>
            <div className={style["strength"]} style={{ width: `${25*strength}%`, backgroundColor: bgcolors[strength - 1]}}>
            </div>
          </div>
        </div>) : null }
      </div>
    );
  }
}

export {Input, WithPasswordStrength};
