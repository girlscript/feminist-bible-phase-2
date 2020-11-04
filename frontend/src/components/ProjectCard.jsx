import React, { Component } from "react";
import mailgunlogo from "../images/placeholder-images/mailgunlogo.png";

class ProjectCard extends Component {
  render() {
    return (
      <div className="project-card">
        <div className="grid-x">
          <div className="cell medium-shrink">
            <div className="project-card__img-container">
              <img src={mailgunlogo} alt="MailGun" />
            </div>
          </div>
          <div className="cell medium-auto">
            <div className="project-card__text-container">
              <h2 className="project-card__title">{this.props.title}</h2>
              <p className="project-card__text">{this.props.text}</p>
              <a href="#placeholder" className="link">Learn more...</a>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
