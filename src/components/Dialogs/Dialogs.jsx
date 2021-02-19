import { NavLink } from 'react-router-dom';
import css from './Dialogs.module.css';

const DialogsItem = (props) => {
    return (
        <div>
            <NavLink to={"/Dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={css.message}>
            {props.message}
        </div>
    )
}

let dialogsData = [
    {id: 1, name: 'Таня'},
    {id: 2, name: 'Фрол'},
    {id: 3, name: 'Мама'},
    {id: 4, name: 'Лена'},
]
let dialogs = dialogsData.map(el => <DialogsItem name={el.name} id={el.id}/>)

let messagesData = [
    {id: 1, message: 'Перове сообщение'},
    {id: 2, message: 'Второе сообщение'},
    {id: 3, message: 'Третье сообщение'},
    {id: 4, message: 'Четвёртое сообщение'},
]
let messages = messagesData.map(el => <Message message={el.message}/>)

const Dialogs = () => {
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