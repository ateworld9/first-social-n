import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/no_avatar.png';

class UsersClass extends React.Component{



    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            })
        }
    }

    render() {
        return <div>
            <button onClick={this.getUsers}>Get Users</button>
            {
                this.props.users.map(users => <div key={users.id}>
                    <div>
                        <img src={users.photos.small != null ? users.photos.small : userPhoto}
                             className={classes.userPhoto}/>
                    </div>
                    <div>
                        {users.followed
                            ? <button onClick={() => {
                                this.props.unFollow(users.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(users.id)
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
}

export default UsersClass;
