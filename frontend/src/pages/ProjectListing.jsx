import React, { Component } from "react";
//import mailgunlogo from "../images/mailgunlogo.png";
//import firefoxlogo from "../images/firefoxlogo.png";
//import webpacklogo from "../images/webpacklogo.png";
import ProjectCard from "../components/ProjectCard.jsx";

//import "../css/pages/ProjectListing.scss";

class ProjectListing extends Component {
  render() {
    const data = [
      {
        title: "Mailgun Auto Enhancement",
        text:
          "   Project description Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit officia consequat duis enimvelit mollit. Exercitation veniam consequat sunt nostrud amet.",
      },
      {
        title: "Firefox Extension Optimization",
        text:
          "   Project description Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit officia consequat duis enimvelit mollit. Exercitation veniam consequat sunt nostrud amet.",
      },
      {
        title: "Bundler Improvement",
        text:
          "   Project description Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit officia consequat duis enimvelit mollit. Exercitation veniam consequat sunt nostrud amet.",
      },
    ];

    return (
      
        <div className="grid-container">
          <div className="cell large-7">
            <h1 className="ProjectListing__title">All Projects</h1>
          </div>

          <div className="grid-x grid-margin-x">
            <div className="cell large-12">
              <div className="ProjectListing__card">
                <ProjectCard title={data[0].title} text={data[0].text} />
              </div>
            </div>

            <div className="cell large-12">
              <div className="ProjectListing__card">
                <ProjectCard title={data[1].title} text={data[1].text} />
              </div>
            </div>

            <div className="cell large-12">
              <div className="ProjectListing__card">
                <ProjectCard title={data[2].title} text={data[2].text} />
              </div>
            </div>
          </div>
          <br/>
          <br/>
        </div>
    
    );
  }
}
export default ProjectListing;
