import React, { Component } from "react";
import { Avatar } from "../Avatar/index.js";

// images
import blog_img from "../../images/placeholder-images/blog_img.png";
import avatar_image from "../../images/placeholder-images/avatar.png";

import style from "./blogcard.module.scss";

export class BlogCard extends Component {
  render() {
    return (
      <div className={style["blog-card__container"]}>
        <img src={blog_img} className={style["blog-card__img"]} alt="blog cover"/>

        <h3 className={style["blog-card__title"]}>
          QTPOC In Comics: “Bingo Love” Depicts Black Queer Women’s Romance
        </h3>

        <div className={style.author}>
          <div className={style["author__name-wrap"]}>
            <p className={style["author__name"]}>Rashmeet Kaur</p>
            <p className={style["author__date"]}>12 Aug 2020</p>
          </div>
          <Avatar avatarSrc={avatar_image} />
        </div>
      </div>
    );
  }
}
