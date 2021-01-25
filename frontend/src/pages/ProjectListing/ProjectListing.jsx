import React, { Component } from "react";
import { ProjectCard } from "../../components/ProjectCard/index.js";

import style from './project-listing.module.scss'

export class ProjectListing extends Component {
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

    let convertedData = Object.keys(data)
      .map((igKey) => {
        return [...Array(data[igKey])].map((_, i) => {
          return (
            <div className="cell large-12">
              <div className={style["project-listing__card"]}>
                <ProjectCard
                  title={data[igKey].title}
                  text={data[igKey].text}
                />
              </div>
            </div>
          );
        });
      })
      .reduce((arr, el) => {
        return arr.concat(el);
      }, []);

    return (
      <div className={style["project-listing"]}>
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="cell large-12">
              <h1 className={style["project-listing__title"]}>All Projects</h1>
            </div>
            <div className="cell large-12">{convertedData}</div>
          </div>
        </div>
      </div>
    );
  }
}
