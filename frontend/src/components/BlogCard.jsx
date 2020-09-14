import React, { Component } from "react";
import '../css/components/blogCard.scss';
import blog_img from '../images/blog_img.png';
import author_img from '../images/author_img.png';

class BlogCard extends Component {
    render() {
        return (
            <div className="card">
               
                   <div className=" blog__card ">
                    <img src= {blog_img} className="blog__card__img" />
                    </div>
                    <div className=" blog__card ">
                        <h3 className="blog__card__detail">QTPOC In Comics: “Bingo Love” Depicts Black Queer Women’s Romance</h3>
                    </div>
                     
                    
                    <div className="author__card" >
                        <div className="author__card__detail" >
                       <p className="author__name">Rashmeet Kaur</p>
                       <p className="author__date">12 Aug 2020</p>
                        </div>
                        <div  className="author__card__img">
                            <img  src={author_img}/>
                        </div>
                    
                    </div>
            </div>
    )
}
}

export default BlogCard ;