import React, {Component} from "react";
import Avatar from "./Avatar.jsx";

//images
import avatar_image from "../images/placeholder-images/avatar.png";

class Notification extends Component{
    render(){
        return(
            <div className="review-notification">
                <div className="review-notification__profile-wrap">
                    <Avatar avatarSrc={avatar_image} />
                    <p className="review-notification__message">
                        <a href="#linkToAuthor" className="username">@shwetal</a> added this article.
                    </p>
                </div>
                <a href="#test" className="button__small button__small--hollow">Review</a>
            </div>
        );
    }
}

export default Notification;