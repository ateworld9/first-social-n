import React from 'react';
import classes from './Users.module.css';

let Users = (props) => {

    return <div>
        {
            props.users.map(users => <div key={users.id}>
                <span>
                    <div>
                        <img src={users.photoUrl} className={classes.userPhoto}/>
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
                </span>
                <span>
                    <span>
                        <div>{users.userName}</div>
                        <div>{users.userStatus}</div>
                    </span>
                    <span>
                        <div>{users.location.countryName}</div>
                        <div>{users.location.cityName}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;