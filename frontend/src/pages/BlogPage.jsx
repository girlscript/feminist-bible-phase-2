import React, { Component } from "react";

import "../css/pages/BlogPage.scss";

import Avatar from "../components/Avatar";

import Linkedin from "../images/linkedin-icon.png";
import Facebook from "../images/fb-icon.png";
import Twitter from "../images/twitter-icon.png";
import ProfilePic from "../images/rashmeet.png";
import BlogImage from "../images/placeholder-images/blog_img.png";

class BlogPage extends Component {
  render() {
    return (
      <>
        <div className="hero">
          <div className="grid-container">
            <div className="grid-x grid-margin-x">
              <div className="cell large-5">
                <img src={BlogImage} className="hero_blogImage" alt="Blog" />
              </div>

              <div className="large-7">
                <h1 className="hero__title">
                  Feminist to the core or a carefully polished brand?
                </h1>

                <div className="hero__details">
                  <Avatar avatarSrc={ProfilePic} />

                  <div className="hero__details__author-date">
                    <h3>Rashmeet Kaur</h3>

                    <p>18 May 2020</p>
                  </div>

                  <div className="links">
                    <div className="links__icon-wrap">
                      <a href="#">
                        <img
                          src={Facebook}
                          className="links__icon"
                          alt="Facebook"
                        />
                      </a>
                      <a href="#">
                        <img
                          src={Linkedin}
                          className="links__icon"
                          alt="Linkedln"
                        />
                      </a>
                      <a href="#">
                        <img
                          src={Twitter}
                          className="links__icon"
                          alt="Twitter"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main">
          <div className="grid-container">
            <div className="grid-x grid-margin-x">
            <div className="cell large-8 large-offset-2">
              <p className="main__para__head">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <p className="main__para__body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              
              <p className="main__para__body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              
              <p className="main__para__body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BlogPage;
