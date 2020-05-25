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


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 10, postText: state.newPostText, likeCounter: 0}],
                newPostText: ''
            }


        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            }
        default :
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: text
});

export default profileReducer;