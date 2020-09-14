import React, { Component } from "react";
import "../css/components/blogCard.scss";
import blog_img from "../images/blog_img.png";
import author_img from "../images/avatar.png";

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
          <div className="avatar">
            <img src={author_img} />
          </div>
        </div>
      </div>
    );
  }
}

export default BlogCard;
