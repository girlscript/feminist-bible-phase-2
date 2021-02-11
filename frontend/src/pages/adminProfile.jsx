import React, { Component } from "react";

//Components
//import BlogCard from "../components/BlogCard.jsx";
import { BlogCard } from "../components/BlogCard/index";

import {Notification} from "../components/Notification/index";

//Images
import LocationIcon from "../images/location-pin.png";
import ProfilePic from "../images/placeholder-images/blog_img.png";

class AdminProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAdmin: true,
    };
  }
  render() {
    return (
      <>
        <div className="admin-profile-hero-section">
          <div className="grid-container">
            <div className="grid-x grid-margin-x">
              <div className="cell large-4 medium-6">
                <div className="admin-profile-hero-section__image-container">
                  <div
                    className="admin-profile-hero-section__image"
                    style={{ backgroundImage: `url(${ProfilePic})` }}
                  ></div>
                </div>
              </div>
              <div className="cell large-8 medium-6">
                <h3 className="admin-profile-hero-section__designation">
                  Founder
                </h3>
                <h2 className="admin-profile-hero-section__name">
                  Rashmeet Kaur
                </h2>
                <div className="admin-profile__social-media">
                  <div className="admin-profile__social-media__location-wrap">
                    <img src={LocationIcon} className="links__icon" alt="location icon"/>
                    <h3 className="location">Goa, India</h3>
                  </div>
                  <div className="admin-profile__social-media__icon-wrap">
                    <a href="test">
                      <div className="links__icon-canvas linkedin">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 30 30"
                          className="links__icon"
                        >
                          <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z" />
                        </svg>
                      </div>
                    </a>

                    <a href="test">
                      <div className="links__icon-canvas facebook">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 30 30"
                          className="links__icon"
                        >
                          <path d="M12,27V15H8v-4h4V8.852C12,4.785,13.981,3,17.361,3c1.619,0,2.475,0.12,2.88,0.175V7h-2.305C16.501,7,16,7.757,16,9.291V11h4.205l-0.571,4H16v12H12z" />
                        </svg>
                      </div>
                    </a>

                    <a href="test">
                      <div className="links__icon-canvas twitter">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="links__icon"
                          viewBox="0 0 30 30"
                        >
                          <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <p className="admin-profile-hero-section__details">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="admin-profile-article-section">
          <div className="grid-container">
            <div className="grid-x grid-margin-x">
              <div className="cell large-12 ">
                <h2 className="admin-profile-article-section__heading">
                  Articles By Admins
                </h2>
                <h3 className="admin-profile-article-section__sub-heading">
                  Directly into your inbox every monday morning
                </h3>
              </div>
              <div className="cell large-4 medium-6 ">
                <BlogCard />
              </div>
              <div className="cell large-4  medium-6">
                <BlogCard />
              </div>
              <div className="cell large-4  medium-6">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>

        {this.state.isAdmin ? (
          <div className="admin-profile-notification-section">
            <div className="grid-container">
              <div className="grid-x grid-margin-x">
                <div className="cell large-12">
                  <h2 className="admin-profile-notification-section__heading">
                    Review Stories
                  </h2>
                </div>
                <div className="cell large-12">
                  <Notification />
                </div>
                <div className="cell large-12">
                  <Notification />
                </div>
                <div className="cell large-12">
                  <Notification />
                </div>
                <div className="cell large-12">
                  <Notification />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default AdminProfile;
