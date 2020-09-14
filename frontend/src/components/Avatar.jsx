import React, { Component } from "react";
import '../css/components/_avatar.scss';

class Avatar extends Component {
  render() {
    return (
        <img src={this.props.avatarSrc} className="avatar" alt="signed-in user"/>      
    );
  }
}

export default Avatar;