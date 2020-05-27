import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/no_avatar.png';

let Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })
        }
    }


    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(users => <div key={users.id}>
                <div>
                    <img src={users.photos.small != null ? users.photos.small : userPhoto}
                         className={classes.userPhoto}/>
                </div>
                <div>
                    {users.followed
                        ? <button onClick={() => {
                            props.unFollow(users.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(users.id)
                        }}>Follow</button>}
                </div>
                <div>{users.name}</div>
                <div>{users.status}</div>
                <div>{"users.location.countryName"}</div>
                <div>{"users.location.cityName"}</div>
            </div>)
        }
    </div>
}

/*export default Users;*/


/*
props.setUsers([
    {
        id: 1,
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/George_Boole.jpg/274px-George_Boole.jpg',
        followed: true,
        userName: 'Dmitriy',
        location: {countryName: 'Russia', cityName: 'Omsk'},
        userStatus: 'i am a programmer'
    },
    {
        id: 2,
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/George_Boole.jpg/274px-George_Boole.jpg',
        followed: false,
        userName: 'Bull',
        location: {countryName: 'Russia', cityName: 'Omsk'},
        userStatus: 'i am a programmer'
    },
    {
        id: 3,
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/George_Boole.jpg/274px-George_Boole.jpg',
        followed: true,
        userName: 'Novikov',
        location: {countryName: 'Russia', cityName: 'Omsk'},
        userStatus: 'i am a programmer'
    },
    {
        id: 4,
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/George_Boole.jpg/274px-George_Boole.jpg',
        followed: false,
        userName: 'Ky39',
        location: {countryName: 'Russia', cityName: 'Omsk'},
        userStatus: 'i am a programmer'
    },
    {
        id: 5,
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/George_Boole.jpg/274px-George_Boole.jpg',
        followed: true,
        userName: 'Timur',
        location: {countryName: 'Russia', cityName: 'Omsk'},
        userStatus: 'i am a programmer'
    }
])*/
