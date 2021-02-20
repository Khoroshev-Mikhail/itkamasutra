import { NavLink } from 'react-router-dom';
import css from './Dialogs.module.css';
import DialogsItem from './DialogItem/DialogItem.jsx';
import Messages from './Messages/Messages.jsx';




const Dialogs = (props) => {
    return (
        <div className={css.dialogs}>
            <div>
                {props.dialogsData.map(el => <DialogsItem name={el.name} id={el.id}/>)}
            </div>
            <div>
                {props.messagesData.map(el => <Messages message={el.message}/>)}
            </div>
        </div>
    );
}

export default Dialogs;