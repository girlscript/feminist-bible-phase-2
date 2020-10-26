import React, { Component } from "react";

// Components
import BlogCard from "../components/BlogCard";
import Avatar from "../components/Avatar.jsx";

// Images
import blog_img from "../images/placeholder-images/blog_img.png";
import avatar_image from "../images/placeholder-images/avatar.png";

class Stories extends Component {
  render() {
    return (
      <>
        <div className="stories-upper-section">
          <div className="grid-container">
            <div className="grid-x grid-margin-x">
              <div className="cell large-12">
                <h1 className="stories__title">Stories</h1>
              </div>

              {/* featured blog */}
              <div className="cell large-5">
                <img
                  src={blog_img}
                  alt="blog_img"
                  className="stories__featured__img"
                />
              </div>

              <div className="cell large-7">
                <div className="stories__featured">
                  <h2 className="stories__featured__title">
                    “Bingo Love” Depicts Black Queer Women’s Romance.
                  </h2>

                  <p className="stories__featured__description">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                    <br />
                    <a href="test" className="stories__featured__link">
                      Read More
                    </a>
                  </p>

                  <div className="stories__featured__author">
                    <Avatar avatarSrc={avatar_image} />

                    <div className="author__name-wrap">
                      <p className="author__name">Rashmeet Kaur</p>
                      <p className="author__date">12 Aug 2020</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="stories-blog-card-section">
          <div className="grid-container">
            <div className="grid-x grid-margin-x">
              <div className="cell large-4">
                <BlogCard />
              </div>
              <div className="cell large-4">
                <BlogCard />
              </div>
              <div className="cell large-4">
                <BlogCard />
              </div>
              <div className="cell large-4">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Stories;
