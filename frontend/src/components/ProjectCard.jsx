import React, { Component } from "react";
import "../css/components/projectCard.scss";
import mail_gun_logo from "../images/mailgunlogo.png";

class ProjectCard extends Component {
  render() {
    return (
      <div className="">
          <div className="grid-container ">
                <div 
                    className="grid-x grid-margin-x" 
                    style=
                        {{ boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.1)" , 
                        backgroundColor: "#F4F4F4"
                    }}>
                    <div 
                        className="cell small-4 project-card__imgcontainer"
                        style={{margin:"0px"}}
                        >
                            <img 
                                src={mail_gun_logo}
                                className="blog-card__img"
                                alt="MailGun"
                                style={{
                                    backgroundColor:'white',
                                }}
                            />
                    </div>
                    <div 
                        className="cell small-8 
                            project-card__textcontainer 
                            project-card__text" 
                        style={{margin:"0px"}}
                        >
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
