import React, { Component } from "react";
import Avatar from "./Avatar.jsx";

import "../css/components/blogCard.scss";

// images
import blog_img from "../images/placeholder-images/blog_img.png";
import avatar_image from "../images/placeholder-images/avatar.png";

class BlogCard extends Component {
  render() {
    return (
      <div className="blog-card__container">
        <img src={blog_img} className="blog-card__img" />

        <h3 className="blog-card__title">
            QTPOC In Comics: “Bingo Love” Depicts Black Queer Women’s Romance
        </h3>

        <div className="author">
          <div className="author__name-wrap">
            <p className="author__name">Rashmeet Kaur</p>
            <p className="author__date">12 Aug 2020</p>
          </div>
          <Avatar avatarSrc={avatar_image}/>
        </div>
      </div>
    );
  }
}

export default BlogCard;
