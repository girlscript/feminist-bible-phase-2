import React, { Component } from "react";
import '../css/pages/home.scss';
import intro_img from '../images/pixeltrue-jogging 1.png';

class Home extends Component {
    render() {
      return (
          <>
            <div className="intro">
                <div className=" grid-container top">
                    <div className=" grid-x grid-margin-x">
                        <div className="cell large-7 head ">
                            <h1 className="head__heading">
                                Made for all, by women.
                            </h1>
                    <p className=" head__para">
                        An inclusive space for all. A place where we understand, 
                        acknowledge and leverage diversity by creating an inclusive 
                        ecosystem powered by content, culture and community.
                    </p>
                    <br/>
                    <p className=" head__para">
                        Do you have a diversity centric organization or special interest group?
                    </p>
                    <br/>
                    <a className="button__small" style={{marginRight:"20px"}}>
                        Write a story
                    </a>
                    <a className="button__small--hollow">
                        Write a story
                    </a>

            </div>

            <div className="cell large-5 "><img src={intro_img} alt="Feminist Bible" className="photo"/></div> 
      
            </div>
            </div>
</div>
          </>
      )
    }
}

export default Home;

