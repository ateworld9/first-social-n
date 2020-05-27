import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.profilePage.posts
        .map(post => <Post message={post.postText} key={post.id} likeCounter={post.likeCounter}/>);

    return (
        <div className={classes.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea value={props.profilePage.newPostText} placeholder='Tell something'
                              onChange={props.onPostChange}/>
                </div>
                <div>
                    <button onClick={props.onAddPost}>Add Post</button>{/*props.onAddPost - отдаем кнопке callback*/}
                </div>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;