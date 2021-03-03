import React, {Component} from "react";
import {Avatar} from "../Avatar/index.js";
import style from "./Notification.module.scss";

//images
import avatar_image from "../../images/placeholder-images/avatar.png";

export class Notification extends Component{
    render(){
        return(
            <div className={style["review-notification"]}>
                <div className={style["review-notification__profile-wrap"]}>
                    <Avatar avatarSrc={avatar_image} />
                    <p className={style["review-notification__message"]}>
                        <a href="#linkToAuthor" className={style["username"]}>@shwetal</a> added this article.
                    </p>
                </div>
                <a href="#test" className={`${style["button__small"]} ${style["button__small--hollow"]}`}>Review</a>
            </div>
        );
    }
}

