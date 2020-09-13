import React, { Component } from "react";
import '../css/components/blogCard.scss';
import blog_img from '../images/blog_img.png';
import author_img from '../images/author_img.png';

class BlogCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-container">
                    <img src= {blog_img} className="card-container__img" />
                    </div>
                    <div className="card-container">
                        <h3>QTPOC In Comics: “Bingo Love” Depicts Black Queer Women’s Romance</h3>
                    </div>

                    <div className="footer" >
                        <div >
                       <p className=" footer__text footer__text--large">Rashmeet Kaur</p>
                       <p className=" footer__text footer__text--small">12 Aug 2020</p>
                        </div>
                        <div  className="footer__img">
                            <img  src={author_img}/>
                        </div>
                    
                    </div>
            </div>
    )
}
}

export default BlogCard ;