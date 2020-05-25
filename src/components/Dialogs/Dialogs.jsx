import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message"

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs
        .map(dialog => <DialogItem userName={dialog.userName} userId={dialog.userId}/>);

    let messagesElements = props.dialogsPage.messages
        .map(message => <Message messageText={message.messageText}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                <div className={classes.messages}>
                    {messagesElements}
                </div>
                <div className={classes.newMessage}>
                    <div>
                        <textarea value={props.dialogsPage.newMessageText} placeholder='Enter your message'
                                  onChange={props.onMessageChange}/>
                    </div>
                    <div>
                        <button onClick={props.onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;

