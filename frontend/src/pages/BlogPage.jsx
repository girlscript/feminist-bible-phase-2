import React,{Component}from "react";

import "../css/pages/BlogPage.scss";

import Linkedin from "../images/linkedin-icon.png";
import Facebook from "../images/fb-icon.png";
import Twitter from "../images/twitter-icon.png";
import ProfilePic from "../images/rashmeet.png";
import BlogImage from "../images/placeholder-images/blog_img.png";

class BlogPage extends Component{
   render(){
    return(
    <>
            <div style={{ background: "#FFFDF6" }}>
          <div className="hero">
            <div className="grid-container fluid">
              <div className="grid-x ">
              <div className="cell small-6">
                  <img src={BlogImage}  className="hero_blogImage"alt="Blog"/>
                </div>

              <div className="cell medium-6">
                <div className="grid-y">
                  <div className="cell small-8">
                  <h1 className="hero__title">Feminist to the core or a carefully polished brand?</h1>
                  </div>

                  <div className="grid-x">
                  {/* Profile Picture */}
                    <div className="grid-container">
                      <div className="grid-y">
                        <div className="cell small-6">
                          <img src={ProfilePic} className="hero__profile" alt="profile"/>
                        </div>
                        </div> 
                      

                    </div>
                    {/* Author and Date */}

                    <div className="grid-container">
                      <div className="grid-y">
                        <div className="cell medium-4">
                          <h3>Rashmeet Kaur</h3>
                        </div>
                        <div className="cell medium-4">
                          <p>18 May 2020</p>
                        </div>
                      </div>
                    </div>
                     {/* Social Media Icons */}
                    <div className="grid-container">
                      <div className="grid-x">
                        <div className="cell medium-4">
                          <img src={Facebook} className="hero__social__icon" alt="facebook"/>
                        </div>
                        <div className="cell medium-4">
                          <img src={Linkedin}  className="hero__social__icon" alt="linkedln"/>
                        </div>
                        <div className="cell medium-4">
                          <img src={Twitter}  className="hero__social__icon" alt="twitter"/>
                        </div>
                      </div>
                    </div>



                  


                  </div>

                </div>
               
              </div>

              
     

                
                </div>
               
              </div>
            </div>

            <div className="main">
              <div className="grid-conatiner fluid">
                <div className="grid-y">
                  <div className="cell large-8">
                  <div className="grid-container">
                    <p className="main__para__head">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>

                  <div className="grid-container">
                    <p className="main__para__body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                                    qui officia deserunt mollit anim id est laborum."



                                    
                    </p>
                    <p className="main__para__body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                                    qui officia deserunt mollit anim id est laborum."



                                    
                    </p>
                    <p className="main__para__body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
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
            </div>



           
          </div>
            
    
</>

    );

   }
}

export default BlogPage;