import React, { Component } from "react";
import '../css/components/input.scss';

class Input extends Component {
  render() {
    return (
        
            <div className="grid-container">
                <div className="grid-x">
                    <div className=" cell large-4 ">
                        <label>Email Address
                            <input type="text" placeholder="username@example.com" />
                        </label>
                    </div>
                </div>
            </div>
                
        
    );
  }
}

export default Input;
