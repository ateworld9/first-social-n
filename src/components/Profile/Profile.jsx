import React from "react";
import classes from "./Profile.module.css";
import avatar from "../../redux/avatar.jpg";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className={classes.profile}>
            <ProfileInfo avatarPath={avatar}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;

