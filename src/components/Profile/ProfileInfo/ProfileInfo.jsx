import React from "react";
import classes from "./ProfileInfo.module.css";



const ProfileInfo = (props) => {

    let avatarPath = "./../" + props.avatarPath;

    return (
        <div>
            <div>
                <img className={`${classes.avatar}`} src={avatarPath} alt="asdf"/>
            </div>
            <div className={classes.descriptionBlock}>
                descrption
            </div>
        </div>
    );
}
export default ProfileInfo;