import Dialogs from "./Dialogs";
import {sendMessageActionCreator} from "../../redux/dialogs-reducer";
import {updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageActionCreator())
        },
        onMessageChange: (event) => {
            let text = event.target.value;
            dispatch(updateNewMessageTextActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;


/*const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {store => {
                let onSendMessageClick = () => {
                    store.dispatch(sendMessageActionCreator());
                }

                let onMessageChange = (event) => {
                    let text = event.target.value;
                    store.dispatch(updateNewMessageTextActionCreator(text))
                }

                let state = store.getState()
                return <Dialogs dialogs={state.dialogsPage.dialogs}
                                messages={state.dialogsPage.messages}
                                newMessageText={state.dialogsPage.newMessageText}
                                sendMessage={onSendMessageClick}
                                updateMessageText={onMessageChange}/>
            }
            }
        </StoreContext.Consumer>
    );

}

export default DialogsContainer;*/

