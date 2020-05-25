import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followActionCreator, setUserActionCreator} from "../../redux/users-reducer";
import {unFollowActionCreator} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {users: state.usersPage.users}
}

let mapDispatchToProps= (dispatch) => {
    return{
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUserActionCreator(users))
        }
    }
}


const UsersContainer = connect (mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;