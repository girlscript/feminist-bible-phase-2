import React, { Component } from "react";

//Components
import { BlogCard } from "../../components/BlogCard/index";

// Styling
import style from "./home.module.scss";

//Images
import GoogleAd from "../../images/homepage/partners-logo/GoogleAds.png";
import Microsoft from "../../images/homepage/partners-logo/Microsoft.png";
import Model from "../../images/homepage/partners-logo/model.png";
import Amazon from "../../images/homepage/partners-logo/amazon.png";
import Figma from "../../images/homepage/partners-logo/figma.png";
import Triangle from "../../images/homepage/Graphics.svg";

export class Home extends Component {
  render() {
    return (
      <>
        <div style={{ background: "#FFFDF6" }}>
          <div className={style["hero"]}>
            <div className="grid-container">
              <div className="grid-x grid-margin-x">
                <div className="cell large-7">
                  <h1 className={style["hero__title"]}>
                    Made for all, by women.
                  </h1>
                  <p className={style["hero__text"]}>
                    An inclusive space for all. A place where we understand,
                    acknowledge and leverage diversity by creating an inclusive
                    ecosystem powered by content, culture and community.
                  </p>

                  <p className={style["hero__text"]}>
                    Do you have a diversity centric organization or special
                    interest group?
                  </p>

                  <div className={style["hero__button-container"]}>
                    <a
                      href="login"
                      className={style["button__big"]}
                      style={{ marginRight: "20px" }}
                    >
                      Login Now
                    </a>
                    <a
                      href="register"
                      className={`${style["button__big"]} ${style["button__big--hollow"]}`}
                    >
                      Register
                    </a>
                  </div>
                </div>
                <div className="cell large-5">
                  <div className={style["hero__image"]}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style["importance-of-diversity"]}>
          <div className="grid-container">
            <div className="grid-x grid-margin-x">
              <div className="cell large-12">
                <h2 className={style["importance-of-diversity__title"]}>
                  Importance of Diversity
                </h2>
              </div>

              <div className="cell large-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non , sunt in culpa qui officia deserunt mollit anim
                  id est laborum."
                </p>

                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="cell large-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat c
                  upidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>

            <img
              src={Triangle}
              alt="mp &amp; rk logo"
              className={style["importance-of-diversity__logo-prop"]}
            />
          </div>
        </div>

        <div style={{ background: "#FFEBF3" }}>
          <div className={style["section"]}>
            <div className="grid-container">
              <div className="grid-x grid-margin-x">
                <div className="cell large-12">
                  <h2 className={style["section__title"]}>Featured Stories</h2>
                  <p className={style["section__text"]}>
                    Read the impact stories from around the world
                  </p>
                </div>
                <div className="cell medium-6 large-4">
                  <BlogCard />
                </div>
                <div className="cell medium-6 large-4">
                  <BlogCard />
                </div>
                <div className="cell medium-6 large-4">
                  <BlogCard />
                </div>
                <div className="cell large-12">
                  <div className={style["section__button-container"]}>
                    <a
                      href="test"
                      className={`${style["button__big"]} ${style["button__big--hollow"]}`}
                    >
                      SEE ALL STORIES
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            background: "linear-gradient(180deg, #FFEBF3 0%, #FFFDF6 100%)",
          }}
        >
          <div className={style["section"]}>
            <div className="grid-container">
              <div className="grid-x grid-margin-x">
                <div className="cell large-12">
                  <h2 className={style["section__title"]}>Our Partners</h2>
                  <p className={style["section__text"]}>
                    We thank all our wonderful partners for all the support
                  </p>
                </div>

                <div className={style["section__partner-logo-container"]}>
                  <img
                    className={style["section__partner-logo"]}
                    src={GoogleAd}
                    alt="Google Ads logo"
                  />
                  <img
                    className={style["section__partner-logo"]}
                    src={Microsoft}
                    alt="Microsoft logo"
                  />
                  <img
                    className={style["section__partner-logo"]}
                    src={Model}
                    alt="Model logo"
                  />
                  <img
                    className={style["section__partner-logo"]}
                    src={Amazon}
                    alt="Amazon logo"
                  />
                  <img
                    className={style["section__partner-logo"]}
                    src={Model}
                    alt="Model logo"
                  />
                  <img
                    className={style["section__partner-logo"]}
                    src={Figma}
                    alt="Figma logo"
                  />
                  <img
                    className={style["section__partner-logo"]}
                    src={GoogleAd}
                    alt="Google Ads logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
