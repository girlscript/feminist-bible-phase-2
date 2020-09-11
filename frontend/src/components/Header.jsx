import React, { Component } from "react";
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
                  <li className="nav__item"><a href="">Stories</a></li>
                  <li className="nav__item"><a href="">Organizations</a></li>
                  <li className="nav__item"><a href="">About</a></li>
                    {
                      this.props.isSignedIn?  
                        <> 
                          <li className="nav__item">
                            <button className="button__big" style={{textTransform: "capitalize"}}>
                              Write a Story
                            </button>
                          </li>
                          <li className="nav__item" data-testid="user-avatar">
                            <img src={this.props.avatarSrc} class="avatar" alt="signed-in user"/>
                          </li> 
                        </>
                        :
                        <li className="nav__item"><a href="">Login</a></li>
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
