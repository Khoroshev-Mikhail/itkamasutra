import { NavLink } from 'react-router-dom';
import css from './../Dialogs.module.css';

const DialogsItem = (props) => {
    return (
        <div>
            <NavLink to={"/Dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem;