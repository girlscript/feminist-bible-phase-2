import React, { Component } from "react";
import mp_rk_logo from "../../images/company-assets/mp_rk_logo.png";


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
                <li className={style["footer__nav-item"]}><a href="placeholder">Home</a></li>
                <li className={style["footer__nav-item"]}><a href="placeholder">Stories</a></li>
                <li className={style["footer__nav-item"]}><a href="placeholder">Organizations</a></li>
                <li className={style["footer__nav-item"]}><a href="placeholder">About</a></li>
              </ul>
            </div>

            <div className="cell large-3 medium-3 small-6">
              <h6 className={style["footer__sub-title"]}>Resources</h6>
              <ul className={style["footer__nav-item-container"]}>
                <li className={style["footer__nav-item"]}><a href="placeholder">Code of Conduct</a></li>
                <li className={style["footer__nav-item"]}><a href="placeholder">Terms and Conditions</a></li>
              </ul>
            </div>

            <div className="cell large-2 medium-2 small-6">
              <h6 className={style["footer__sub-title"]}>Connect</h6>
              <ul className={style["footer__nav-item-container"]}>
                <li className={style["footer__nav-item"]}><a href="placeholder">Instagram</a></li>
                <li className={style["footer__nav-item"]}><a href="placeholder">Facebook</a></li>
                <li className={style["footer__nav-item"]}><a href="placeholder">LinkedIn</a></li>
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


