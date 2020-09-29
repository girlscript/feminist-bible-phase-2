import React, { Component } from "react";
import "../css/components/projectCard.scss";
import mail_gun_logo from "../images/mailgunlogo.png";

class ProjectCard extends Component {
  render() {
    return (
      <div className="project-card__container">
          <div className="grid-container">
                <div className="grid-x grid-margin-x">
                    <div className="cell large-4">
                            <img 
                                src={mail_gun_logo}
                                className="blog-card__img"
                                alt="MailGun"
                                style={{
                                    backgroundColor:'white',
                                }}
                            />
                    </div>
                    <div className="cell large-8 blog-card__text">
                        <h2>
                            Mailgun Auto Enhancement 
                        </h2>
                        <p>
                            Project description Amet minim mollit non deserunt ullamco est sit aliqua dolor do  amet sint. Velit officia 
                            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. 
                        </p>
                        <a>
                            <u>
                                Learn more...
                            </u>    
                        </a>
                    </div>   
                </div>   
            </div>                            
        </div>
    );
  }
}

export default ProjectCard;
