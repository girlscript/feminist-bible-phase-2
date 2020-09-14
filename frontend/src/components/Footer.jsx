import React, { Component } from "react";
import "../css/components/_footer.scss";
import FooterImg from "../images/FooterLogo.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="cell large-5">
              <p className="text__head">MP & RK Company</p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className="cell large-2">
              <p className="text__head">Navigate</p>
              <p>
                <ul>
                  <li>Home</li>
                  <li>Stories</li>
                  <li>Organizations</li>
                  <li>About</li>
                </ul>
              </p>
            </div>
            <div className="cell large-3">
              <p className="text__head">Resources</p>
              <p>
                <ul>
                  <li>Code of Conduct</li>
                  <li>Terms and Conditions</li>
                </ul>
              </p>
            </div>
            <div className="cell large-2">
              <p className="text__head">Connect</p>
              <p>
                <ul>
                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>LinkedIn</li>
                </ul>
              </p>
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
            <div className="cell large-12 vote__of__thanks">
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
