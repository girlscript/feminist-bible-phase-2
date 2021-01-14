import React, { Component } from "react";

import style from "./avatar.module.scss"

export class Avatar extends Component {
  render() {
    return (
        <img src={this.props.avatarSrc} className={style["avatar"]} alt="signed-in user"/>      
    );
  }
}
