import React, {Component} from "react";
import Avatar from "./Avatar.jsx";

//images
import avatar_image from "../images/placeholder-images/avatar.png";

class Notification extends Component{

    render(){
        return(
            <div className="review-notification">
                <div className="review-notification__profile-wrap">
                    <Avatar avatarSrc={avatar_image}/>
                    <h3 className="review-notification__username">@Shwetal </h3>
                    <p className="review-notification__article">added this article</p>
                </div>
                <div className="review-notification__review-wrap">
                    <a href="#" className="button__xsmall button__xsmall--hollow">Review</a>
                </div>
            </div>
        );
    }
}

export default Notification;