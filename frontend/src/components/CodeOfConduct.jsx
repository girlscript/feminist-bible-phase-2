import React, { Component } from "react";
import hero_img from "../images/hero_img.png";
import '../css/components/CodeofConduct.scss';
import equity from "../images/equity.png";
import life_choices from "../images/life_choices.png";
import voice_matters from "../images/voice_matters.png";


class CodeOfConduct extends Component {
    render() {
      return (

    <div className="CodeofConduct">

        <div className="hero-section">
            <div className=" grid-container top">
                <div className=" grid-x grid-margin-x">
                
                    <div className="cell large-7 head ">

                        <h1 className="head__heading">Community Guidelines and Code of Conduct</h1>
                        
                        <p className=" head__para"> Each community member(s), global citizen(s), group(s) and organisation must follow the respective guidelines set by the community and should abide by the code of conduct.</p>
                          
                    </div>

                    <div className="cell large-5 "><img src={hero_img} alt="download 1" className="photo"/></div> 
                    
                </div>
            </div>
        </div>
      
       <div className="main-content">

           <h2 className="main-content__heading"> Code of Conduct</h2>

            <div className="grid-container">
                <div className="grid-x grid-margin-x">

                        {/* <div className="cell large-1"></div> */}

                   
                        <div className="cell large-5 large-offset-1">

                            <div className="card">
                                <h2 className="card__title">01</h2>
                                <h2 className="card__head">Respect</h2>
                                <p className="card__para">Be respectful of people’s writng(s), comment(s) and or feedback. Respect people’s confidentiality. </p>
                            </div>

                        </div>

                        <div className="cell large-5 ">

                            <div className="card">
                                <h2 className="card__title">02</h2>
                                <h2 className="card__head">Be Kind</h2>
                                <p className="card__para">Individuals share vulnerable thoughts and experiences. Please be kind and respectful to them. </p>
                            </div>

                        </div>

                        {/* <div className="cell large-1"></div> */}
                   
                </div>    

                <div className="grid-x grid-margin-x">

                            {/* <div className="cell large-1"></div> */}
                        
                            <div className="cell large-5 large-offset-1 ">

                                <div className="card">
                                    <h2 className="card__title">03</h2>
                                    <h2 className="card__head">No offense</h2>
                                    <p className="card__para">Feminist Bible is a child-friendly and family-oriented community website. Abusive, offensive and disrespectful language in comments feedback and website content should be reported to Feminist Bible team. </p>
                                </div>

                            </div>

                            <div className="cell large-5  ">

                                <div className="card">
                                    <h2 className="card__title">04</h2>
                                    <h2 className="card__head">Report</h2>
                                    <p className="card__para">If you are having a problem with another account member, please send our Feminist Bible team a message containing as much information on the issues and or incident to address the situation adequately. </p>
                                </div>

                            </div>

                            {/* <div className="cell large-1"></div> */}
                        
                </div>
            </div>
        </div>


        <div className="guidelines-section">

            <h2 className="guidelines-section__heading">Community Guidelines</h2>

            <div className="grid-container">
                <div className="grid-x grid-margin-x">

                    <div className="cell large-4">
                        <div class="guidelines-card">

                            <img src={equity} alt="equity"  className="guidelines-card__image"/>

                            <p className="guidelines-card__text">Equity is essential because it allows others to treat individual wants respectfully</p>

                        </div>
                    </div>

                    <div className="cell large-4">
                        <div class="guidelines-card">

                            <img src={life_choices} alt="life_choices" className="guidelines-card__image"/>

                            <p className="guidelines-card__text">Be empathetic to people’s life choices and maintain the sanctity of this safe place</p>
                            
                        </div>
                    </div>

                    <div className="cell large-4">
                        <div class="guidelines-card">
                            
                            <img src={voice_matters} alt="voice_matters" className="guidelines-card__image"/>

                            <p className="guidelines-card__text">Every Opinion and voice matters</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>    


        )
    }
} 

export default CodeOfConduct;