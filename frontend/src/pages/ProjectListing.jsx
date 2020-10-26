import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard.jsx";

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

    let convertedData = Object.keys(data).map(igKey => {
        return [...Array(data[igKey])].map((_, i) => {
            return (
              <div className="cell large-12">
                <div className="ProjectListing__card">
                  <ProjectCard className="ProjectListing__card" title={data[igKey].title} text={data[igKey].text} />
                </div>
              </div>
            )}); 
    }).reduce((arr, el) => {
      return arr.concat(el)
    },[]);

    return (
      
        <div className="grid-container">
          <div className="cell large-7">
            <h1 className="ProjectListing__title">All Projects</h1>
          </div>
          <div className="grid-x grid-margin-x">
            <div className="cell large-12">
              <div>
                {convertedData}
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
