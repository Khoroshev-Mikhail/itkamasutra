import { NavLink } from 'react-router-dom';
import css from './Dialogs.module.css';
import DialogsItem from './DialogItem/DialogItem.jsx';
import Messages from './Messages/Messages.jsx';
import React from 'react'

const Dialogs = (props) => {

    let dialogs = props.messages.dialogsData.map(el => <DialogsItem name={el.name} id={el.id}/>);
    let messages = props.messages.messagesData.map(el => <Messages message={el.message}/>);

    let textarea = React.createRef();

    let addMessage = () => {
        props.addMessageActionCreator();
    }

    let onMessageChange = () => {
        let text = textarea.current.value;
        props.updateMessageActionCreator(text);
    }

    return (
        <div className={css.dialogs}>
            <div>
                {dialogs}
            </div>
            <div>
                <textarea ref={textarea} value={props.newMessageText} onChange={onMessageChange}></textarea>
                
                <p><button onClick={addMessage}>addMessage</button></p>
                {messages}
            </div>
        </div>
    );
}

export default Dialogs;