import React, { Component } from "react";
import mailgunlogo from "../../images/placeholder-images/mailgunlogo.png";

import style from "./projectcard.module.scss";

export class ProjectCard extends Component {
  render() {
    return (
      <div className={style["project-card"]}>
        <div className="grid-x">
          <div className="cell medium-shrink">
            <div className={style["project-card__img-container"]}>
              <img src={mailgunlogo} alt="MailGun" />
            </div>
          </div>
          <div className="cell medium-auto">
            <div className={style["project-card__text-container"]}>
              <h2 className={style["project-card__title"]}>
                {this.props.title}
              </h2>
              <p className={style["project-card__text"]}>{this.props.text}</p>
              <a href="#placeholder" className="link">
                Learn more...
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
