import React, { Component } from "react";
import '../css/pages/home.scss';
import intro_img from '../images/pixeltrue-jogging 1.png';
import BlogCard from '../components/BlogCard'
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
                    <div className="cell small-7 large-offset-1">
                        <h2>
                            Importance of Diversity
                        </h2>
                        <br/>
                    </div>
                    <div className="grid-x grid-margin-x">
                        <div className="cell large-5 medium-6 large-offset-1">
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
                        <div className="cell large-5 medium-6">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat c
                                upidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <br/>
                        </div> 
                        <div className="cell large-offset-7" style={{position:"absolute", display: "flex", marginTop:"150px" }}>
                            <img src={Triangle} alt=""/>
                        </div>
                    </div>   
                </div>     
            </div>   
            <div style={{background:"#FFEBF3"}}>
                <div className="feature">
                    <div className="cell small-7">
                        <h2>
                            Featured Stories
                        </h2>
                        <h6 style={{color:"#6E6D7A"}}>
                            Read the impact stories from around the world
                        </h6>
                        <br/>
                        <ul className="list__item-container large-offset-1">
                            <li className="list__item">
                                <BlogCard/>
                            </li>
                            <li className="list__item">
                                <BlogCard/>
                            </li>
                            <li className="list__item">
                                <BlogCard/>
                            </li>
                        </ul>
                        <div style={{marginTop:"82px"}}>
                        <a className="button__big button__big--hollow">
                            SEE ALL STORIES
                        </a>
                        </div>
                    </div>
                </div>
                <div style={{background:"linear-gradient(180deg, #FFEBF3 0%, #FFFDF6 100%)"}}>
                    <div className="feature" style={{padding:"221px"}}>
                        <div className="cell small-7">
                            <h2>
                                Our Partners
                            </h2>
                            <h6 style={{color:"#6E6D7A"}}>
                                We thank all our wonderful partners for all the support
                            </h6>
                            <br/>
                            <ul className="list__item-container large-offset-1 centreitems">
                                <li className="list__item">
                                    <img src={GoogleAd} width="254.41px" height="80px"  alt="Google Ads"/>
                                </li>
                                <li className="list__item">
                                    <img src={Microsoft} width="254.41px" height="80px" alt="Microsoft"/>
                                </li>
                                <li className="list__item">
                                    <img src={Model} width="254.41px" height="80px"  alt="Model"/>
                                </li>
                                <li className="list__item">
                                    <img src={Amazon} width="254.41px" height="80px" alt="Amazon"/>
                                </li>
                            </ul>
                            <br/>
                            <ul className="list__item-container large-offset-1 centreitems">
                                <li className="list__item">
                                    <img src={Model} width="254.41px" height="80px"  alt="Model"/>
                                </li>
                                <li className="list__item">
                                    <img src={Figma} width="222.61px" height="70px"  alt="Figma"/>
                                </li>
                                <li className="list__item">
                                    <img src={GoogleAd} width="254.41px" height="80px"  alt="Google Ads"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
          </>
      )
    }
}

export default Home;

