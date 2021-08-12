import css from './Dialogs.module.css';
import DialogsItem from './DialogItem/DialogItem.jsx';
import Messages from './Messages/Messages.jsx';
import React from 'react'

class Dialogs extends React.Component{
    constructor(props){
        super(props)
        this.dialogs = this.props.messages.dialogsData.map(el => <DialogsItem name={el.name} id={el.id}/>);
        this.messages = this.props.messages.messagesData.map(el => <Messages message={el.message}/>);
        this.textarea = React.createRef();
    }

    addMessage = () => {
        this.props.addMessageActionCreator();
    }

    onMessageChange = () => {
        let text = this.textarea.current.value;
        this.props.updateMessageActionCreator(text);
    }

    render(){
        return (
            <div className={css.dialogs}>
                <div>
                    {this.dialogs}
                </div>
                <div>
                    <textarea ref={this.textarea} value={this.props.newMessageText} onChange={this.onMessageChange}></textarea>
                    
                    <p><button onClick={this.addMessage}>addMessage</button></p>
                    {this.messages}
                </div>
            </div>
        );
    }
}

export default Dialogs;