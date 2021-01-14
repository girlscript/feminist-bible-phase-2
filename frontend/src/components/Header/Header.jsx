import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import {Avatar} from "../Avatar/index.js";

// images/
import logo from "../../images/company-assets/feminist_bible_logo.png";

// css
import style from "./header.module.scss";

export class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      navHidden: window.innerWidth <= 640?true:false,
    }
  }

  showHideNav = () =>{
    this.setState({
      navHidden: this.state.navHidden?false:true,
    })
  }

  hideNav = () =>{
    if(window.innerWidth <= 640){
      this.setState({
        navHidden: true,
      })
    }
  }

  render() {
    return (
      <header className={style.header}>
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="cell medium-3">
              <Link to="/" onClick={this.hideNav}>
                <img
                  src={logo}
                  alt="feminist bible logo"
                  className={style["header__logo"]}
                />
              </Link>
            </div>
            <div className="cell medium-9">
              <nav className={style.nav}>
                <ul className={style["nav__item-container"]} style={{display: this.state.navHidden?'none':'flex'}}>
                  <li className={style["nav__item"]} onClick={this.hideNav}>
                    <NavLink to="/forum" activeClassName="active">
                      Forum
                    </NavLink>
                  </li>
                  <li className={style["nav__item"]} onClick={this.hideNav}>
                    <NavLink to="/stories" activeClassName="active">
                      Stories
                    </NavLink>
                  </li>
                  <li className={style["nav__item"]} onClick={this.hideNav}>
                    <NavLink to="/organization" activeClassName="active">
                      Organizations
                    </NavLink>
                  </li>
                  <li className={style["nav__item"]} onClick={this.hideNav}>
                    <NavLink to="/about" activeClassName="active">
                      About
                    </NavLink>
                  </li>
                  {this.props.isSignedIn ? (
                    <>
                      <li className={style["nav__item"]}>
                        <a
                          href="#test"
                          className="button__small"
                          style={{ textTransform: "none" }}
                        >
                          Write a story
                        </a>
                      </li>
                      <li className={style["nav__item"]} data-testid="user-avatar">
                        <Avatar avatarSrc={this.props.avatarSrc} />
                      </li>
                    </>
                  ) : (
                    <li className={style["nav__item"]} onClick={this.hideNav}>
                      <NavLink to="/login" activeClassName="active">
                        Login
                      </NavLink>
                    </li>
                  )}
                </ul>
                <button id={style["menu-icon"]} aria-label="menu icon" onClick={this.showHideNav}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                      d="M3 12L21 12M3 6L21 6M3 18L21 18"
                    />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
