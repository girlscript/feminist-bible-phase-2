import React, {Component} from "react";

//Components
import BlogCard from "../components/BlogCard";

//Images
import LocationIcon from "../images/location-pin.png";
import Linkedin from "../images/linkedin-icon.png";
import Facebook from "../images/fb-icon.png";
import Twitter from "../images/twitter-icon.png";
import ProfilePic from "../images/placeholder-images/blog_img.png";

class AdminProfile extends Component {
    render() {
        return(
            <>
                <div className="hero-section">
                    <div className="grid-container">
                        <div className="grid-x grid-margin-x">
                            <div className="cell large-4 ">
                                <div className="hero-section__image" style={{backgroundImage: `url(${ProfilePic})`}}></div>
                            </div>
                            <div className="cell large-8">
                                <h3 className="hero-section__designation">Founder</h3>
                                <h2 className="hero-section__name">Rashmeet Kaur</h2>
                                <div className="links">
                                    <div className="links__location-wrap">
                                        <img src={LocationIcon} className="links__icon" />
                                        <h3 className="location">Location</h3>
                                    </div>
                                    <div className="links__icon-wrap">
                                        <a href="#"><img src={Facebook} className="links__icon" /></a>
                                        <a href="#"><img src={Linkedin} className="links__icon" /></a>
                                        <a href="#"><img src={Twitter} className="links__icon" /></a>
                                    </div>
                                </div>
                                <p className="hero-section__details">
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                                    qui officia deserunt mollit anim id est laborum."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="article-section">
                    <div className="grid-container">
                        <div className="grid-x grid-margin-x">
                            <div className="cell large-12">
                                <h2 className="article-section__heading">Articles By Admins</h2>
                                <h3 className="article-section__sub-heading">Directly into your inbox every monday morning</h3>
                            </div>
                              <div className="cell large-4 small-12">
                                <BlogCard />
                              </div>
                              <div className="cell large-4 small-12">
                                <BlogCard />
                              </div>
                              <div className="cell large-4 small-12">
                                <BlogCard />
                              </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }    
}

export default AdminProfile;
