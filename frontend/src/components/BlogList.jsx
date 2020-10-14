import React, { Component } from "react";
import "../css/components/BlogList.scss";
import BlogCard from "./BlogCard";
import blog_img from "../images/blog_img.png";
import avatar_image from "../images/placeholder-images/avatar.png";
import Avatar from "./Avatar.jsx";

class BlogList extends Component {
  render() {
    return (
      <div className="BlogList">
        <div className="hero-section">
          <div className=" grid-container top">
            <div className=" grid-x grid-margin-x">
              <div className="cell large-12  ">
                <div className="BlogList__header">
                  <h1 className="BlogList__header__title">Stories</h1>

                    <div className=" grid-x grid-margin-x">
                      <div className="cell large-5 ">
                        <div className="BlogList__header__img">
                          <img
                            src={blog_img}
                            alt="blog_img"
                            className="guidelines-card__image"
                          />
                        </div>
                      </div>

                      <div className="cell large-7 ">
                        <div className="BlogList__header">
                          <div className="BlogList__header__title">
                            <h2>
                              QTPOC In Comics: “Bingo Love” Depicts Black Queer
                              Women’s Romance.
                            </h2>
                          </div>
                          <div className="BlogList__header__subtitle">
                            <p>
                              Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non
                              proident, sunt in culpa qui officia deserunt
                              mollit anim id est laborum."
                            </p>
                            <div className="BlogList__header__link">
                              <a>Read More</a>
                              <div>
                                <div className="author">
                                  <Avatar avatarSrc={avatar_image} />

                                  <div className="author__name-wrap">
                                    <p className="author__name">
                                      Rashmeet Kaur
                                    </p>
                                    <p className="author__date">12 Aug 2020</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
               
              </div>
            </div>
          </div>

          <div className="grid-container">
            <div className="grid-x grid-margin-x">
              <div className="cell large-4 BlogList__footer">
                <BlogCard />
              </div>
              <div className="cell large-4 BlogList__footer">
                <BlogCard />
              </div>
              <div className="cell large-4 BlogList__footer">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogList;
