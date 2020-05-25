const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {messageText: state.newMessageText}],
                newMessageText: ''
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessageText
            };
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: text
    }
}


export default dialogsReducer;