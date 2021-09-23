import { connect } from 'react-redux';
import { addMessage, updateMessage } from '../../redux/dialogsreducer';
import Dialogs from './Dialogs';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../HOC/withAuthRedirect';

let f1 = (state) => {
    return {
        messages : state.messages,
        newMessageText : state.messages.newMessageText,
    }
}


let DialogsContainer = withAuthRedirect(connect(f1, 
    {addMessage, updateMessage})
    (Dialogs));

export default DialogsContainer;