import React, { Component } from "react";

// component
import { Avatar } from "../Avatar/index.js";

import Comment from "../Comment";
import CommentInput from "../CommentInput";

// images
import avatar_image from "../../images/placeholder-images/forum_post_avatar.png";
import comment_img from "../../images/CommentIcon.png"
import like_img from "../../images/LikeIcon.png"
import facebook from '../../images/facebook.png'
import twitter from '../../images/twitter.png'
import linkedin from '../../images/linkedin.png'

// style
import style from "./forum-post.module.scss";

export class ForumPost extends Component {
  render() {
    return (
        <>
        <div className={style["forum-post__container"]}>
            <div className={style["forum-post__post-section"]}>
                <div> {/*author*/}
                    <p className={style["author__time"]}>
                            4 days ago
                    </p>
                    <div className='flex-container'>
                        <div>
                            <Avatar avatarSrc={avatar_image}/>
                        </div>
                        <div>
                            <div className={style["author__title"]}>
                                Courtney Henry
                            </div>
                            <p className={style["author__text"]}>
                                Organisation Name
                            </p>
                        </div>  
                    </div>
                </div>
                <div> {/*content*/}
                    <h3>
                        What is the deadline of the form?
                    </h3>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua 
                        dolor do  amet sint. Velit officia consequat duis enim 
                        velit mollit. Exercitation veniam consequat sunt nostrud 
                        amet. Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do  amet sint.
                    </p>
                </div>
                <div className={style["social__container"]}> {/*footer*/}
                    <div className="flex-container"> {/*left side*/}
                        <img
                            src={comment_img}
                            alt="comments"
                        />
                        <p>  10  </p>
                        <img
                            src={like_img}
                            alt="likes"
                        />
                        <p>  15  </p>
                    </div>
                    <div className="flex-container"> {/*icons*/}
                        <p className={style["social__media"]}>Share to </p>
                        <img
                            src={facebook}
                            alt="facebook"
                            className={style["social__media"]}
                        />
                        <img
                            src={twitter}
                            alt="twitter"
                            className={style["social__media"]}
                        />
                        <img
                            src={linkedin}
                            alt="linkedin"
                            className={style["social__media"]}
                        />
                    </div>
                </div>
            </div>
            <div className={style["comment-section"]}>
                <CommentInput/>
                <Comment/>
                <a href="placeholder" className={style["load-comment"]}>
                    Load more comments
                </a>
            </div>
        </div>
        </>
    );
}
}
