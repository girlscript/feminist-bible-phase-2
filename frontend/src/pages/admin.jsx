import React, { Component } from "react";

//style
import "../css/pages/admin.scss";


//Images
import linkedIn from "../images/linkedin 1.png";
import adminImg1 from "../images/adminImg.png";
import adminImg2 from "../images/adminImg2.png";
class Admin extends Component {

    render() {
        return (
            <>
                <div style={{ background: "#FFFDF6" }}>
                    <div className="about">
                        <div className="grid-container grid-x grid-margin-x">

                            <div class="cell medium-4">
                                <h1>About us</h1>
                            </div>
                            <div class="cell small-8">
                                <p>Maybelyn Plecic and Rashmeet Kaur are the founders of the Feminist Bible.
                                It began in January
                                2020, where they decided to co-write a book to share real women's stories.  In time, they
                                realized that there were not enough repositories online that could easily share famous women
                                role models from various fields. </p>

                                <p>For many years, they both learned that most stories are from
                                the male population. They both agreed it was time for the other half of the missing women's
                                stories to share successes, struggles, inspirations, and journeys.
                               </p>
                            </div>
                        </div>
                    </div>


                </div>

                <div style={{ background: "linear-gradient(180deg, #FFFDF6 0%, #FFEBF3 100%)" }}>
                    <div className="coFounder">
                        <div className="grid-container grid-x grid-margin-x ">
                            <div className="cell large-12">
                                <h1 >
                                    Co-Founders
                            </h1>
                                <br />
                            </div>

                            <div className="cell large-6"  style={{paddingRight: "60px" }}>
                             
                                <img src={adminImg1} alt="avatar" />
                                <div className="coFounder-name ">
                                    <h3 >Maybelyn H. Plecic</h3>
                                    <img src={linkedIn} alt="linkedIn" />
                                </div>
                                <p>Presidio Distinguished Engineer - 2019</p>
                                <p>Professional Services Manager - 10 Reporting Engineers</p>
                                <p>Cisco DevNet Creator Award 2019</p>
                                <p>Cisco Certified - CCNA, CCNP, CCDA, CCDP - Collaboration Focus</p>
                                <p>Lean In Wonder Women and Lean In Too Regional Leader</p>
                                <p>The Star In Me Influencer</p>
                                <p>Women Who Code Python Evangelist</p>
                                <p>Podcast Host of Vitamae https://vitamae.org</p>
                                <p>Blogger at https://maybelynplecic.com</p>
                                <p> She is married to Jesenko Plecic, a life partner and mother of four boys 18 yrs. old, 15
                                  years old, and 14 years old twins</p>
                            </div>

                            <div className="cell large-6 "  style={{paddingRight: "60px" }}>
                                <img src={adminImg2} alt="avatar" />

                                <div className="coFounder-name" >
                                    <h3  >Rashmeet Kaur</h3>
                                    <img src={linkedIn} alt="linkedIn"   />
                                </div>
                                <p>Supply Chain Professional</p>
                                <p>Mechanical and Manufacturing Systems Engineer</p>
                                <p>Graduate Researcher at Cranfield University, UK</p>
                                <p>AMPMO Fellow at Indian School of Business</p>
                                <p>Lean In India and India Corporate Network- Co-Founder</p>
                                <p>Pencils & Pistons - Founder</p>
                                <p>Strategic Programs and Partnership Consultant at The Star In Me</p>
                                <p>Author - Diary of a Young Blogger and Colored Lens</p>
                                <p>Podcaster- Unsolicited Supply ! and Unmuted</p>
                                <p> Google IAmRemarkable Facilitator</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Admin;