import React from "react";
import classes from "./Post.module.css";
import avatar from "../../../../redux/avatar.jpg"

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src={avatar} alt={"asdf"}/>
            {props.message}
            <div className={classes.like}>
                <span>{props.likeCounter} Like</span>
            </div>
        </div>);
}

export default Post;