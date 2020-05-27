import React from "react";
import UsersClass from "./UsersClass";
import {connect} from "react-redux";
import {followActionCreator, setUserActionCreator} from "../../redux/users-reducer";
import {unFollowActionCreator} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {users: state.usersPage.users}
}

//dispatch - предназначен для передачи action хранилищам(state)
//В диспетчере state регистрируют свои функции обратного вызова (callback) и зависимости между хранилищами.

let mapDispatchToProps= (dispatch) => {
    return{
        //callback
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        //callback
        unFollow: (userId) => {
            dispatch(unFollowActionCreator(userId))
        },
        //callback
        setUsers: (users) => {
            dispatch(setUserActionCreator(users))
        }
    }
}

//connect- внутри него локальный Subscriber: каждый раз когда изменяется state
// запускается функция mapStateToProps(возвращает новый state)
// после формируется новый объект, который сравнивается со старым объектом,но сравнивается не весь state, а только нужная этой компоненте часть (users)

const UsersContainer = connect (mapStateToProps,mapDispatchToProps)(UsersClass);

export default UsersContainer;