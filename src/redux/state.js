//store - OOP
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    _state: {
        profilePage:
            {
                posts: [
                    {id: 1, postText: "Hi, how are you?", likeCounter: 15},
                    {id: 2, postText: "Today is a good weather", likeCounter: 13},
                    {id: 3, postText: "COVID 19", likeCounter: 125}
                ],
                newPostText: ""
            },
        dialogsPage:
            {
                dialogs: [
                    {userId: 1, userName: "Dmitriy"},
                    {userId: 2, userName: "Bull"},
                    {userId: 3, userName: "Novikov"},
                    {userId: 4, userName: "Ky39"},
                    {userId: 5, userName: "Timur"}
                ],
                messages: [
                    {id: 1, messageText: "Hello, how are u?"},
                    {id: 2, messageText: "Okay"},
                    {id: 3, messageText: "That's good"}
                ],
                newMessageText: ""
            }
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state
    },
    //описываем callback функцию, в обсервер помещается функция, которую мы хотим вызвать из другого файла, чтобы не было циклической зависимости.
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)

    }
}

