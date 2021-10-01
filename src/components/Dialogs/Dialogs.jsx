import css from './Dialogs.module.css';
import DialogsItem from './DialogItem/DialogItem.jsx';
import Messages from './Messages/Messages.jsx';
import React from 'react'
import {Field, reduxForm} from 'redux-form'

const Dialogs = (props) => {

    let dialogs = props.messages.dialogsData.map(el => <DialogsItem name={el.name} id={el.id}/>);
    let messages = props.messages.messagesData.map(el => <Messages message={el.message}/>);

    let addMessage = (formData) => {
        props.addMessage(formData.newMessageText);
    }
    return (
        <div className={css.dialogs}>
            <div>
                {dialogs}
            </div>
            <div>
                <ReduxMessagesForm onSubmit={addMessage}/>
                {messages}
            </div>
        </div>
    );
}

const MessagesForm = (props) => {
    return (
        <div><form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'newMessageText'} placeholder={'New message...'}/>
            <p><button>addMessage</button></p>
        </form></div>
    )
}

const ReduxMessagesForm = reduxForm({form : 'newMessageForm'})(MessagesForm)

export default Dialogs;