import React, { Component } from "react";

//components
import Avatar from "./Avatar.jsx";

//images
import avatar_image from "../images/placeholder-images/avatar.png";

class Comment extends Component {

    changeHandler = e => {
        e.persist();
        this.setState(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
      }

    render() {
        return(
            <div className="flex-container">
                <div className="comment-input__img-container">
                    <Avatar avatarSrc={avatar_image}/>
                </div>
                <div className="comment-input__text-container">
                    <form>
                        <input
                            className="comment-input__input-comment"
                            type = "text"
                            placeholder="Write your comment here ..."
                            onChange={this.changeHandler}
                        />
                        <button className="button__comment"> 
                            Post
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Comment;