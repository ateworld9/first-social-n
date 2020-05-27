const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    posts: [
        {id: 1, postText: "Hi, how are you?", likeCounter: 15},
        {id: 2, postText: "Today is a good weather", likeCounter: 13},
        {id: 3, postText: "COVID 19", likeCounter: 125}
    ],
    newPostText: ""
};

// reducer -Чистая функция, которая принимает State и action, скорее всего модифицирует State, по правилу immutable (благодаря callback'ам)
// И возвращает измененную копию State!!!!
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        //callback func
        case ADD_POST:
            // так как нельзя изменять state  создаем его копию и возвращаем уже ее
            return {
                ...state,
                posts: [...state.posts, {id: 10, postText: state.newPostText, likeCounter: 0}],
                newPostText: ''
            }
        //callback func
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            }
        default :
            return state;
    }
}

// Создает Action , который нужен редьюсеру, для определения того какую callback func вызвать
// И передаёт параметр нужный callback'у
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: text
});

export default profileReducer;