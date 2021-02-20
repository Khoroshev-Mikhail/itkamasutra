import { NavLink } from 'react-router-dom';
import css from './Dialogs.module.css';
import DialogsItem from './DialogItem/DialogItem.jsx';
import Messages from './Messages/Messages.jsx';




const Dialogs = (props) => {

    let dialogs = props.dialogsData.map(el => <DialogsItem name={el.name} id={el.id}/>);
    let messages = props.messagesData.map(el => <Messages message={el.message}/>);

    return (
        <div className={css.dialogs}>
            <div>
                {dialogs}
            </div>
            <div>
                {messages}
            </div>
        </div>
    );
}

export default Dialogs;