import React, { Component } from "react";

// Components
import { BlogCard } from "../../components/BlogCard/index.js";
import {Avatar} from "../../components/Avatar/index.js";

//styling
import style from "./stories.module.scss";

// Images
import blog_img from "../../images/placeholder-images/blog_img.png";
import avatar_image from "../../images/placeholder-images/avatar.png";

export class Stories extends Component {
  render() {
    return (
      <>
        <div className={style["stories-upper-section"]}>
          <div className="grid-container">
            <div className="grid-x grid-margin-x">
              <div className="cell large-12">
                <h1 className={style["stories__title"]}>Stories</h1>
              </div>

              {/* featured blog */}
              <div className="cell large-5 medium-6">
                <img
                  src={blog_img}
                  alt="blog_img"
                  className={style["stories__featured__img"]}
                />
              </div>

              <div className="cell large-7 medium-6">
                <div className={style["stories__featured"]}>
                  <h2 className={style["stories__featured__title"]}>
                    “Bingo Love” Depicts Black Queer Women’s Romance.
                  </h2>

                  <p className={style["stories__featured__description"]}>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                    <br />
                    <a href="test" className={style["stories__featured__link"]}>
                      Read More
                    </a>
                  </p>

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

        <div className={style["stories-blog-card-section"]}>
          <div className="grid-container">
            <div className="grid-x grid-margin-x">
              <div className="cell large-4 medium-6">
                <BlogCard />
              </div>
              <div className="cell large-4 medium-6">
                <BlogCard />
              </div>
              <div className="cell large-4 medium-6">
                <BlogCard />
              </div>
              <div className="cell large-4 medium-6">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
