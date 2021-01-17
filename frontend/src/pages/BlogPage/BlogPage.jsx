import React, { Component } from "react";

//Components
import {Avatar} from "../../components/Avatar/index";

//Style
import style from './blog-page.module.scss'

// images
import avatar_image from "../../images/rashmeet.png";
import blog_img from "../../images/placeholder-images/blog_img.png";

export class BlogPage extends Component {
  render() {
    return (
      <>
        <div className={style["blog-page"]}>
          <div className="grid-container">
            <div className="grid-x grid-margin-x">
              <div className="cell large-5">
                <img
                  src={blog_img}
                  alt="blog_img"
                  className={style["stories__featured__img"]}
                />
              </div>

              <div className="cell large-7">
                <div className={style["stories__featured"]}>
                  <h1 className={style["stories__featured__title"]}>
                    Feminist to the core or a carefully polished brand ?  
                  </h1>

                  <div className={style["stories__featured__author"]}>
                    <Avatar avatarSrc={avatar_image} />

                    <div className={style["author__name-wrap"]}>
                      <p className={style["author__name"]}>Rashmeet Kaur</p>
                      <p className={style["author__date"]}>12 Aug 2020</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style["article"]}>
          <div className="grid-container">
            <div className="grid-x grid-margin-x">
              <div className="cell large-8 large-offset-2">
                <p className={`${style["article__content"]} ${style["article.quote"]}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <p className={style["article__content"]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum."
                </p>

                <p className={style["article__content"]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum."
                </p>

                <p className={style["article__content"]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum."
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

