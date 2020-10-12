import React, { Component } from "react";
import mailgunlogo from "../images/mailgunlogo.png";
import firefoxlogo from "../images/firefoxlogo.png";
import webpacklogo from "../images/webpacklogo.png";

import "../css/pages/ProjectListing.scss";

class ProjectListing extends Component {
  render() {
    return (
      <div className="ProjectListing">
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="cell large-7">
              <h1 className="ProjectListing__title">All Projects</h1>
            </div>
          </div>
          <div className="ProjectListing__MainCard">
            <div className="grid-x grid-margin-x">
              <div className="cell large-3">
                <div className="ProjectListing__Card">
                  <div className="ProjectListing__imgCard">
                    <img
                      src={mailgunlogo}
                      alt="mailgunlogo"
                      className="ProjectListing__img1"
                    />
                  </div>
                </div>
              </div>

              <div className="cell large-9">
                <div className="content">
                  <div className="content__title">
                    <h2>Mailgun auto enhancement</h2>
                  </div>
                  <div className="content__description">
                    <p>
                      Project description Amet minim mollit non deserunt ullamco
                      est sit aliqua dolor do amet sint. Velit officia consequat
                      duis enim velit mollit. Exercitation veniam consequat sunt
                      nostrud amet.
                    </p>
                  </div>
                  <div className="content__link">
                    <a>Learn more.....</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ProjectListing__MainCard">
            <div className="grid-x grid-margin-x">
              <div className="cell large-3">
                <div className="ProjectListing__Card">
                  <div className="ProjectListing__imgCard">
                    <img
                      src={firefoxlogo}
                      alt="firefoxlogo"
                      className="ProjectListing__img2"
                    />
                  </div>
                </div>
              </div>

              <div className="cell large-9">
                <div className="content">
                  <div className="content__title">
                    <h2>Firefox Extension Optimization</h2>
                  </div>
                  <div className="content__description">
                    <p>
                      Project description Amet minim mollit non deserunt ullamco
                      est sit aliqua dolor do amet sint. Velit officia consequat
                      duis enim velit mollit. Exercitation veniam consequat sunt
                      nostrud amet.
                    </p>
                  </div>
                  <div className="content__link">
                    <a>Learn more.....</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ProjectListing__MainCard">
            <div className="grid-x grid-margin-x">
              <div className="cell large-3">
                <div className="ProjectListing__Card">
                  <div className="ProjectListing__imgCard">
                    <img
                      src={webpacklogo}
                      alt="webpacklogo"
                      className="ProjectListing__img3"
                    />
                  </div>
                </div>
              </div>

              <div className="cell large-9">
                <div className="content">
                  <div className="content__title">
                    <h2>Bundler Improvement</h2>
                  </div>
                  <div className="content__description">
                    <p>
                      Project description Amet minim mollit non deserunt ullamco
                      est sit aliqua dolor do amet sint. Velit officia consequat
                      duis enim velit mollit. Exercitation veniam consequat sunt
                      nostrud amet.
                    </p>
                  </div>
                  <div className="content__link">
                    <a>Learn more.....</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProjectListing;
