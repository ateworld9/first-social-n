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
// reducer -Чистая функция, которая принимает State и action, скорее всего модифицирует State, по правилу immutable (благодаря callback'ам)
// И возвращает измененную копию State!!!!
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        //callback
        case SEND_MESSAGE:
            // так как нельзя изменять state создаем его копию и возвращаем уже ее
            // если нужна только часть state создаем копию только этой части
            return {
                ...state,
                messages: [...state.messages, {messageText: state.newMessageText}],
                newMessageText: ''
            };
        //callback
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessageText
            };
        default:
            return state;
    }
}
// Создает Action , который нужен редьюсеру, для определения того какую callback func вызвать
// И передаёт параметр нужный callback'у
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: text
    }
}


export default dialogsReducer;