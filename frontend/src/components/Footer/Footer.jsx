import React, { Component } from "react";
import mp_rk_logo from "../../images/company-assets/mp_rk_logo.png";
import { Link, NavLink ,BrowserRouter } from "react-router-dom";

// css
import style from "./footer.module.scss";

export class Footer extends Component {
  render() {
    return (
      <div className={style["footer"]}>
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="cell large-5 medium-5">
              <h6 className={style["footer__sub-title"]}>MP &amp; RK Company</h6>
              <p className={style["about-company"]}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>

            <div className="cell large-2 medium-2 small-6">
              <h6 className={style["footer__sub-title"]}>Navigate</h6>
              <ul className={style["footer__nav-item-container"]}>
              <li className={style["footer__nav-item"]}>
                <BrowserRouter forceRefresh = {true}>
                  <NavLink to="/" activeClassName="active">
                      Home
                    </NavLink>
                  </BrowserRouter>
                </li>
                <li className={style["footer__nav-item"]}>
                  <BrowserRouter forceRefresh={true} >
                <NavLink to="/stories" activeClassName="selected" >
                      Stories
                    </NavLink>
                  </BrowserRouter>
                </li>
                <li className={style["footer__nav-item"]}>
                <BrowserRouter forceRefresh={true} >
                <NavLink to="/organization" activeClassName="active">
                      Organizations
                  </NavLink>
                  </BrowserRouter>
                  </li>
                <li className={style["footer__nav-item"]}>
                  <BrowserRouter forceRefresh = {true}>
                  <NavLink to="/about" activeClassName="active">
                      About
                    </NavLink>
                  </BrowserRouter>
                </li>
              </ul>
            </div>

            <div className="cell large-3 medium-3 small-6">
              <h6 className={style["footer__sub-title"]}>Resources</h6>
              <ul className={style["footer__nav-item-container"]}>
                <li className={style["footer__nav-item"]}>
                <BrowserRouter forceRefresh={true} >
                <NavLink to="/code-of-conduct" activeClassName="active">
                      Code of Conduct
                  </NavLink>
                  </BrowserRouter>
                </li>
                {/* after creating the code of conductpage just add the id of the same href name  */}
                <li className={style["footer__nav-item"]}>
                <BrowserRouter forceRefresh={true} >
                <NavLink to="/terms-and-conditions" activeClassName="active">
                     Terms and Conditions
                  </NavLink>
                  </BrowserRouter>
                </li>
              </ul>
            </div>

            <div className="cell large-2 medium-2 small-6">
              <h6 className={style["footer__sub-title"]}>Connect</h6>
              <ul className={style["footer__nav-item-container"]}>
                <li className={style["footer__nav-item"]}><a href="https://www.instagram.com/feminist_bible/?hl=en">Instagram</a></li>
                <li className={style["footer__nav-item"]}><a href="https://www.facebook.com/">Facebook</a></li>
                <li className={style["footer__nav-item"]}><a href="https://www.linkedin.com/feed/">LinkedIn</a></li>
              </ul>
            </div>

            <div className="cell large-12 small-6">
              <div className={style["company__wrap"]}>
                <img src={mp_rk_logo} className={style["company__logo"]} alt="Company" />
                <div className={style["company__copyright"]}>
                  <span>Copyright 2020</span>
                  <span>MP &amp; RK Company</span>
                </div>
              </div>
            </div>

            <div className="cell large-12">
              <p className={style["footer__credits"]}>
                Designed and built with love by the GSSoC Extended team with the
                help of <a href="placeholder">our contributors.</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


