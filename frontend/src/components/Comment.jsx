import React, { Component } from "react";

//components
import Avatar from "./Avatar.jsx";

//images
import avatar_image from "../images/placeholder-images/avatar.png";

class Comment extends Component {
    render() {
        return(
            <div className="flex-container">
                <div className="comment__img-container">
                    <Avatar avatarSrc={avatar_image}/>
                </div>
                <div>
                    <div className="comment__text-container">
                        <p className="comment__title">
                            Courtney Henry
                        </p>
                        <p className="comment__time">
                            5hr
                        </p>
                        <br/>
                        <br/>
                        <p className="comment__text">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
                            sunt nostrud amet.
                        </p>
                    </div>
                    <a className="reply" href="placeholder"> 
                        Reply
                    </a>
                </div>
            </div>
        )
    }
}
export default Comment;