const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        {id: 1, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/George_Boole.jpg/274px-George_Boole.jpg' ,
            followed:true, userName: 'Dmitriy', location: {countryName: 'Russia', cityName: 'Omsk'},userStatus:'i am a programmer'},
        {id: 2, photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/George_Boole.jpg/274px-George_Boole.jpg' ,
            followed:false, userName: 'Bull', location: {countryName: 'Russia', cityName: 'Omsk'},userStatus:'i am a programmer'},
        {id: 3, photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/George_Boole.jpg/274px-George_Boole.jpg' ,
            followed:true, userName: 'Novikov', location: {countryName: 'Russia', cityName: 'Omsk'},userStatus:'i am a programmer'},
        {id: 4, photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/George_Boole.jpg/274px-George_Boole.jpg' ,
            followed:false, userName: 'Ky39', location: {countryName: 'Russia', cityName: 'Omsk'},userStatus:'i am a programmer'},
        {id: 5, photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/George_Boole.jpg/274px-George_Boole.jpg' ,
            followed:true, userName: 'Timur', location: {countryName: 'Russia', cityName: 'Omsk'},userStatus:'i am a programmer'}
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {...state,
                    users: state.users.map( user => {
                        if (user.id === action.userId) {
                            return {...user, followed: true}
                        }
                        return user; })
            };
        case UNFOLLOW:
            return {...state,
                    users: state.users.map( user => {
                        if (user.id === action.userId){
                            return {...user, followed: false}
                        }
                        return user; })
            };
        case SET_USERS:
            return{...state, users: [...state.users, ...action.users]};

        default: return state;
    }
}

export const followActionCreator = (userId) => ({type: FOLLOW, userId})
export const unFollowActionCreator = (userId) => ({type: UNFOLLOW, userId})
export const setUserActionCreator= (users) => ({type: SET_USERS})

export default usersReducer;