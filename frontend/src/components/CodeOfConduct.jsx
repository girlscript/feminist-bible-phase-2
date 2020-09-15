import React, { Component } from "react";
import photo from "../images/download 1.png";
import '../css/components/CodeofConduct.scss';
import CodeofConduct1 from "../images/CodeofConduct1.png";
import CodeofConduct2 from "../images/CodeofConduct2.png";
import CodeofConduct3 from "../images/CodeofConduct3.png";


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

                    <div className="cell large-5 "><img src={photo} alt="download 1" className="photo"/></div> 
                    
                </div>
            </div>
        </div>
      
       <div className="main-content">

           <h2 className="main-content__heading"> Code of Conduct</h2>

            <div className="grid-container">
                <div className="grid-x grid-margin-x">

                   
                        <div className="cell large-6">

                            <div className="card1">
                                <h2 className="card1__title">01</h2>
                                <h2 className="card1__head">Respect</h2>
                                <p className="card1__para">Be respectful of people’s writng(s), comment(s) and or feedback. Respect people’s confidentiality. </p>
                            </div>

                        </div>

                        <div className="cell large-6">

                            <div className="card2">
                                <h2 className="card2__title">02</h2>
                                <h2 className="card2__head">Be Kind</h2>
                                <p className="card2__para">Individuals share vulnerable thoughts and experiences. Please be kind and respectful to them. </p>
                            </div>

                        </div>
                   
                </div>    

                <div className="grid-x grid-margin-x">
                        
                            <div className="cell large-6">

                                <div className="card3">
                                    <h2 className="card3__title">03</h2>
                                    <h2 className="card3__head">No offense</h2>
                                    <p className="card3__para">Feminist Bible is a child-friendly and family-oriented community website. Abusive, offensive and disrespectful language in comments feedback and website content should be reported to Feminist Bible team. </p>
                                </div>

                            </div>

                            <div className="cell large-6">

                                <div className="card4">
                                    <h2 className="card4__title">04</h2>
                                    <h2 className="card4__head">Report</h2>
                                    <p className="card4__para">If you are having a problem with another account member, please send our Feminist Bible team a message containing as much information on the issues and or incident to address the situation adequately. </p>
                                </div>

                            </div>
                        
                </div>
            </div>
        </div>


        <div className="guidelines-section">

            <h2 className="guidelines-section__heading">Community Guidelines</h2>

            <div className="grid-container">
                <div className="grid-x grid-margin-x">

                    <div className="cell large-4">
                        <div class="block1">

                            <img src={CodeofConduct1} alt="CodeofConduct1"  className="block1__image"/>

                            <p className="block1__text">Equity is essential because it allows others to treat individual wants respectfully</p>

                        </div>
                    </div>

                    <div className="cell large-4">
                        <div class="block2">

                            <img src={CodeofConduct2} alt="CodeofConduct2" className="block2__image"/>

                            <p className="block2__text">Be empathetic to people’s life choices and maintain the sanctity of this safe place</p>
                            
                        </div>
                    </div>

                    <div className="cell large-4">
                        <div class="block1">
                            
                            <img src={CodeofConduct3} alt="CodeofConduct3" className="block3__image"/>

                            <p className="block3__text">Every Opinion and voice matters</p>

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