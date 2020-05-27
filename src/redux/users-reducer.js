const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
 users: []
};
// reducer -Чистая функция, которая принимает State и action, скорее всего модифицирует State, по правилу immutable (благодаря callback'ам)
// И возвращает измененную копию State!!!!
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        //callback func
        case FOLLOW:
            // так как нельзя изменять state  создаем его копию и возвращаем уже ее
            return {...state,
                    users: state.users.map( user => {
                        if (user.id === action.userId) {
                            return {...user, followed: true}
                        }
                        return user; })
            };
        //callback func
        case UNFOLLOW:
            // так как нельзя изменять state  создаем его копию и возвращаем уже ее
            return {...state,
                    users: state.users.map( user => {
                        if (user.id === action.userId){
                            return {...user, followed: false}
                        }
                        return user;})
            };
        //callback func
        case SET_USERS:
            return{...state, users: [...state.users, ...action.users]};

        default: return state;
    }
}

// Создает Action , который нужен редьюсеру, для определения того какую callback func вызвать
// И передаёт параметр нужный callback'у
export const followActionCreator = (userId) => ({type: FOLLOW, userId})
export const unFollowActionCreator = (userId) => ({type: UNFOLLOW, userId})
export const setUserActionCreator= (users) => ({type: SET_USERS, users})

export default usersReducer;