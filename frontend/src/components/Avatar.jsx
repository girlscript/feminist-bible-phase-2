import React, { Component } from "react";

class Avatar extends Component {
  render() {
    return (
        <img src={this.props.avatarSrc} className="avatar" alt="signed-in user"/>      
    );
  }
}

export default Avatar;