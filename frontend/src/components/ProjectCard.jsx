/*import React, { Component } from "react";
import mail_gun_logo from "../images/placeholder-images/mailgunlogo.png";

class ProjectCard extends Component {
  render() {
    return (
      <div className="project-card">
        <div className="grid-x">
          <div className="cell medium-shrink">
            <div className="project-card__img-container">
              <img src={mail_gun_logo} alt="MailGun" />
            </div>
          </div>
          <div className="cell medium-auto">
            <div className="project-card__text-container">
              <h2 className="project-card__title">Mailgun Auto Enhancement</h2>
              <p className="project-card__text">
                Project description Amet minim mollit non deserunt ullamco est
                sit aliqua dolor do amet sint. Velit officia consequat duis enim
                velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>
              <a href="#placeholder" className="link">
                <u>Learn more...</u>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
*/
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
