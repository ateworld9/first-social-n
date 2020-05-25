import React from "react";
import classes from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import avatar from "../../../redux/avatar.jpg";


const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <img src={avatar} alt={""} />
            <NavLink to={`/Dialogs/${props.userId}`} activeClassName={classes.active}> {props.userName} </NavLink>
        </div>
    )
}

export default DialogItem;
