import React, { Component } from "react";
import "../css/components/footer.scss";
import FooterImg from "../images/FooterLogo.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="cell large-5">
              <p className="footer__sub-title">MP & RK Company</p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className="cell large-2">
              <p className="footer__sub-title">Navigate</p>
              
                <ul className="footer__nav-item-container">
                  <li className="footer__nav-item" >Home</li>
                  <li className="footer__nav-item">Stories</li>
                  <li className="footer__nav-item">Organizations</li>
                  <li className="footer__nav-item">About</li>
                </ul>
              
            </div>
            <div className="cell large-3">
              <p className="footer__sub-title">Resources</p>
              
                <ul className="footer__nav-item-container">
                  <li className="footer__nav-item">Code of Conduct</li>
                  <li className="footer__nav-item">Terms and Conditions</li>
                </ul>
              
            </div>
            <div className="cell large-2">
              <p className="footer__sub-title">Connect</p>
              
                <ul className="footer__nav-item-container">
                  <li className="footer__nav-item">Instagram</li>
                  <li className="footer__nav-item">Facebook</li>
                  <li className="footer__nav-item">LinkedIn</li>
                </ul>
              
            </div>
          </div>

          <div className="grid-x grid-margin-x">
            <div className="cell shrink">
              <img src={FooterImg} className="footer__img" />
            </div>
            <div className="cell large-3 footer__img-text">
              <p>Copyright 2020 </p>
              <p>MP & RK Company</p>
            </div>
          </div>

          <div className="grid-x grid-margin-x">
            <div className="cell large-12 footer__credits">
              <p>
                Designed and built with love by the GirlScript Team with the
                help of <span>our contributors.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
