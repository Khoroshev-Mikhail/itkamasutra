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

let messagesData = [
    {id: 1, message: 'Перове сообщение'},
    {id: 2, message: 'Второе сообщение'},
    {id: 3, message: 'Третье сообщение'},
    {id: 4, message: 'Четвёртое сообщение'},
]


const Dialogs = () => {
    return (
        <div className={css.dialogs}>
            <div>
                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id}/>
            </div>
            <div>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
            </div>
        </div>
    );
}

export default Dialogs;