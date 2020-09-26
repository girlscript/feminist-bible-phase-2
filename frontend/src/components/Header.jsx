import React, { Component } from "react";
import Avatar from './Avatar';
import logo from "../images/feminist_bible_logo.png";
import '../css/components/header.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="cell large-3">
              <img src={logo} alt="feminist bible logo" className="header__logo"/>
            </div>
            <div className="cell large-9">
              <nav className="nav">
                <ul className="nav__item-container">
                  <li className="nav__item"><a href="#test">Stories</a></li>
                  <li className="nav__item"><a href="#test">Organizations</a></li>
                  <li className="nav__item"><a href="#test">About</a></li>
                  {
                    this.props.isSignedIn?
                      <> 
                        <li className="nav__item">
                          <a href="#test" className="button__small" style={{textTransform: "none"}}>
                            Write a story
                          </a>
                        </li>
                        <li className="nav__item" data-testid="user-avatar">
                          <Avatar avatarSrc={this.props.avatarSrc}/>
                        </li> 
                      </>
                      :
                      <li className="nav__item">
                        <a href="#test">Login</a>
                      </li>
                  }
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
