import css from './../Dialogs.module.css';

const Messages = (props) => {
    return (
        <div className={css.message}>
            {props.message}
        </div>
    )
}
export default Messages;