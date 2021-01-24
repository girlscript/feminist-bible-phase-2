import React, { Component } from "react";

//Images
// import linkedIn from "../images/linkedin 1.png";
import img_1 from "../../images/img-1.png";
import img_2 from "../../images/img-2.png";

//css
import style from "./aboutUs.module.scss";

export class AboutUs extends Component {
  render() {
    return (
      <>
        <div style={{ background: "#FFFDF6" }}>
          <div className={style["about"]}>
            <div className="grid-container">
              <div className=" grid-x grid-margin-x">
                <div className="cell medium-4">
                  <h1>About us</h1>
                </div>
                <div className="cell medium-8">
                  <p>
                    Maybelyn Plecic and Rashmeet Kaur are the founders of the
                    Feminist Bible. It began in January 2020, where they decided
                    to co-write a book to share real women's stories. In time,
                    they realized that there were not enough repositories online
                    that could easily share famous women role models from
                    various fields.{" "}
                  </p>

                  <p>
                    For many years, they both learned that most stories are from
                    the male population. They both agreed it was time for the
                    other half of the missing women's stories to share
                    successes, struggles, inspirations, and journeys.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            background: "linear-gradient(180deg, #FFFDF6 0%, #FFEBF3 100%)",
          }}
        >
          <div className={style["coFounder"]}>
            <div className="grid-container">
              <div className=" grid-x grid-margin-x ">
                <div className="cell ">
                  <h1>Co-Founders</h1>
                  <br />
                </div>

                <div className="cell medium-6">
                  <div className={style["coFounder-div"]}>
                    <div className={style["coFounder-avatar"]}>
                      <img src={img_1} alt="avatar" />
                    </div>
                    <div className={style["coFounder-name"]}>
                      <h3>Maybelyn H. Plecic</h3>
                      {/* <img src={linkedIn} alt="linkedIn" /> */}
                    </div>
                    <ul className={style["coFounder-details__list"]}>
                      <li>Presidio Distinguished Engineer - 2019</li>
                      <li>
                        Professional Services Manager - 10 Reporting Engineers
                      </li>
                      <li>Cisco DevNet Creator Award 2019</li>
                      <li>
                        Cisco Certified - CCNA, CCNP, CCDA, CCDP - Collaboration
                        Focus
                      </li>
                      <li>
                        Lean In Wonder Women and Lean In Too Regional Leader
                      </li>
                      <li>The Star In Me Influencer</li>
                      <li>Women Who Code Python Evangelist</li>
                      <li>Podcast Host of Vitamae https://vitamae.org</li>
                      <li>Blogger at https://maybelynplecic.com</li>
                      <li>
                        {" "}
                        She is married to Jesenko Plecic, a life partner and
                        mother of four boys 18 yrs. old, 15 years old, and 14
                        years old twins
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="cell medium-6 ">
                  <div className={style["coFounder-div"]}>
                    <div className={style["coFounder-avatar"]}>
                      <img src={img_2} alt="avatar" />
                    </div>
                    <div className={style["coFounder-name"]}>
                      <h3>Rashmeet Kaur</h3>
                      {/* <img src={linkedIn} alt="linkedIn" /> */}
                    </div>
                    <ul className={style["coFounder-details__list"]}>
                      <li>Supply Chain Professional</li>
                      <li>Mechanical and Manufacturing Systems Engineer</li>
                      <li>Graduate Researcher at Cranfield University, UK</li>
                      <li>AMPMO Fellow at Indian School of Business</li>
                      <li>
                        Lean In India and India Corporate Network- Co-Founder
                      </li>
                      <li>Pencils &amp; Pistons - Founder</li>
                      <li>
                        Strategic Programs and Partnership Consultant at The
                        Star In Me
                      </li>
                      <li>
                        Author - Diary of a Young Blogger and Colored Lens
                      </li>
                      <li>Podcaster- Unsolicited Supply ! and Unmuted</li>
                      <li> Google IAmRemarkable Facilitator</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
