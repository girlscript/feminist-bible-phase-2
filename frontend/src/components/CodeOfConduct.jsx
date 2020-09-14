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
        <div>
        
        <div className="head"> 
          <div className="head__photo"><img src={photo} alt="download 1"/></div> 
      
          <div className="head__content">
            <h1 className="head__item">Community Guidelines and Code of Conduct</h1>
            <div>
              <h1 className="text head__text"> Each community member(s), global citizen(s), group(s) and organisation must follow the respective guidelines set by the community and should abide by the code of conduct.</h1>
            </div>
          </div>
        
          </div>
        </div> 

        <div className="main-content_bg">
        <div className="main-content">
          <h2 className="title_codeofconduct"> Code of Conduct</h2>
        </div>
        
        <div className="main-content__cardlayout">
          <div className="main-content__card1">
          <h2 className="main-content__card1__title">01</h2>
          <h2 className="main-content__card1__head">Respect</h2>
          <p className=" text main-content__card1__para">Be respectful of people’s writng(s), comment(s) and or feedback. Respect people’s confidentiality. </p>
          </div>

          <div className="main-content__card1">
          <h2 className="main-content__card1__title">02</h2>
          <h2 className="main-content__card1__head">Be Kind</h2>
          <p className="main-content__card1__para">Individuals share vulnerable thoughts and experiences. Please be kind and respectful to them. </p>
          </div>
      
        <div className="main-content__card1 main-content__card_margin">
          <h2 className="main-content__card1__title">03</h2>
          <h2 className="main-content__card1__head">No offense</h2>
          <p className="main-content__card1__para">Feminist Bible is a child-friendly and family-oriented community website. Abusive, offensive and disrespectful language in comments feedback and website content should be reported to Feminist Bible team. </p>
          </div>

          <div className="main-content__card1" >
          <h2 className="main-content__card1__title">04</h2>
          <h2 className="main-content__card1__head">Report</h2>
          <p className=" text main-content__card1__para">If you are having a problem with another account member, please send our Feminist Bible team a message containing as much information on the issues and or incident to address the situation adequately. </p>
          </div>

        
        </div>
        </div>
      <div className="codeofconduct_lastblock" >
        <h2 className="codeofconduct_lastblock__last_content">Community Guidelines</h2>
      </div>
        <div className="codeofconduct_lastblock__cardlayout2">
       
        <div className="codeofconduct_lastblock__card">
      
        <img src={CodeofConduct1} alt="CodeofConduct1"  className="image2"/>
       
         <p className="codeofconduct_lastblock__text2">Equity is essential because it allows others to treat individual wants respectfully</p>
      </div>

         
         <div className="codeofconduct_lastblock__card">
        <div className="image2">
        <img src={CodeofConduct2} alt="CodeofConduct2"/>
         </div> 
         <div className="codeofconduct_lastblock__text2">
         <p>Be empathetic to people’s life choices and maintain the sanctity of this safe place</p>
        </div>
         
         </div>

         <div className="codeofconduct_lastblock__card">
        <div className="image2">
        <img src={CodeofConduct3} alt="CodeofConduct3"/>
         </div> 
         <div className="codeofconduct_lastblock__text2">
         <p>Every Opinion and voice matters</p>
        </div>
        

         
         </div>

      
      </div>
      </div>
     
        )
    }
} 

export default CodeOfConduct;