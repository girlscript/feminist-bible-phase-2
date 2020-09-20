import React, { Component } from "react";
import '../css/pages/home.scss';
import intro_img from '../images/pixeltrue-jogging 1.png';
import BlogCard from '../components/BlogCard'

class Home extends Component {
    render() {
      return (
          <>
          <div style={{background:"#FFFDF6"}}>
            <div className="intro">
                <div className="grid-container grid-x grid-margin-x">
                            <div className="cell small-7">
                                <h1 >
                                    Made for all, by women.
                                </h1>
                                <p >
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
            <div>
                <div className="importanceOfDiversity">
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
                        <div className="cell large-5 medium-6 ">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat c
                                upidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <br/>
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
                        <div style={{display:"inline-block"}}>
                            <BlogCard/>
                            <BlogCard/>
                            <BlogCard/>
                        </div>
                    </div>
                        
                    
                </div>
                </div>
          </>
      )
    }
}

export default Home;

