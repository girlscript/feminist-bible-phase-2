import React, { Component } from "react";
import '../css/components/blogCard.scss';
import blog_img from '../images/blog_img.png';
import author_img from '../images/author_img.png';

class BlogCard extends Component {
    render() {
        return (
            <div class="card">
                <div class="card-container">
                    <img src= {blog_img} class="card_img" />
                    </div>
                    <div class="card-container">
                        <h3>QTPOC In Comics: “Bingo Love” Depicts Black Queer Women’s Romance</h3>
                    </div>

                    <div class="card-footer" >
                        <div class="card-footer-text" >
                       <p class="p_1">Rashmeet Kaur</p>
                       <p class="p_2">12 Aug 2020</p>
                        </div>
                        <div  class="card-footer-img">
                            <img  src={author_img}/>
                        </div>
                    
                    </div>
            </div>
    )
}
}

export default BlogCard ;