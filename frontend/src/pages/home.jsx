import React, { Component } from "react";

//style
import '../css/pages/home.scss';

//Components
import BlogCard from '../components/BlogCard'

//Images
import intro_img from '../images/pixeltrue-jogging 1.png';
import GoogleAd from '../images/GoogleAds.png'
import Microsoft from '../images/Microsoft.png'
import Model from '../images/model.png'
import Amazon from '../images/amazon.png'
import Figma from '../images/figma.png'
import Triangle from '../images/Graphics.svg'

class Home extends Component {

    render() {

      return (
          <>

            <div style={{background:"#FFFDF6"}}>
                <div className="intro">
                    <div className="grid-container grid-x grid-margin-x">
                        <div className="cell small-7">
                            <h1>
                                Made for all, by women.
                            </h1>
                            <p>
                                An inclusive space for all. A place where we understand, 
                                acknowledge and leverage diversity by creating an inclusive 
                                ecosystem powered by content, culture and community.
                            </p>
                            <br/>
                            <p>
                                Do you have a diversity centric organization or special interest group?
                            </p>
                            <br/>
                            <a className="button__big" style={{marginRight:"10px"}}>
                                Write a story
                            </a>
                            <a className="button__big button__big--hollow">
                                Write a story
                            </a>
                        </div>
                        <div className="cell medium-5">
                            <img src={intro_img} alt="Feminist Bible" className="photo"/>
                        </div> 
                    </div>
                </div>
            </div>

            <div style={{background:"linear-gradient(180deg, #FFFDF6 0%, #FFEBF3 100%)"}}>
                <div className="importanceOfDiversity ">
                    <div className="grid-container grid-x grid-margin-x">
                        <div className="cell large-12">
                            <h2>
                                Importance of Diversity
                            </h2>
                            <br/>
                        </div>
                    </div>
                    <div className="grid-x grid-margin-x">
                        <div className="cell large-6">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                                , sunt in culpa qui officia deserunt mollit anim id est laborum." 
                            </p>
                            <br/>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                                in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="cell large-6">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat c
                                upidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <br/>
                        </div> 
                        <div 
                            className="cell large-12" 
                            style={{
                                display: "flex", 
                                justifyContent: "flex-end", 
                                position:"absolute", 
                                paddingTop: "112.5px" 
                            }}>
                            <img src={Triangle} alt=""/>
                        </div> 
                    </div>   
                </div>     
            </div>   
            
            <div style={{background:"#FFEBF3"}}>
                <div className="feature">
                    <div className="cell small-7">
                        <div className="grid-container">
                            <div className="grid-x grid-margin-x">
                                <div className="cell large-12">
                                    <h2>
                                        Featured Stories
                                    </h2>
                                    <h6 style={{color:"#6E6D7A"}}>
                                        Read the impact stories from around the world
                                    </h6>
                                </div>
                                <div className="cell large-4">
                                    <BlogCard/>
                                </div>
                                <div className="cell large-4">
                                    <BlogCard/>
                                </div> 
                                <div className="cell large-4">
                                    <BlogCard/>
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop:"82px"}}>
                            <a className="button__big button__big--hollow">
                                SEE ALL STORIES
                            </a>
                        </div>
                    </div>
                </div>
            </div>
                
            <div style={{background:"linear-gradient(180deg, #FFEBF3 0%, #FFFDF6 100%)"}}>
                <div className="feature">
                    <div className="cell small-7">
                        <div className="grid-container">
                            <div className="grid-x grid-margin-x">
                                <div className="cell large-12">
                                    <h2>
                                        Our Partners
                                    </h2>
                                    <h6 style={{color:"#6E6D7A"}}>
                                        We thank all our wonderful partners for all the support
                                    </h6>
                                </div>

                                {/* First row */}
                                <div className="cell large-3">
                                    <img src={GoogleAd}  alt="Google Ads"/>
                                </div>
                                <div className="cell large-3">
                                    <img src={Microsoft} alt="Microsoft"/>
                                </div> 
                                <div className="cell large-3">
                                    <img src={Model}  alt="Model"/>
                                </div>
                                <div className="cell large-3">
                                    <img src={Amazon} alt="Amazon"/>
                                </div>
                                
                                {/* Second row */}
                                <div className="cell large-4">
                                    <img src={Model}  alt="Model"/>
                                </div>
                                <div className="cell large-4">
                                    <img src={Figma}  alt="Figma"/>
                                </div> 
                                <div className="cell large-4">
                                    <img src={GoogleAd} alt="Google Ads"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          </>
      )
    }
}

export default Home;
