import { connect } from 'react-redux';
import { addMessage, updateMessage } from '../../redux/dialogsreducer';
import Dialogs from './Dialogs';

let f1 = (state) => {
    return {
        messages : state.messages,
        newMessageText : state.messages.newMessageText
    }
}


let DialogsContainer = connect(f1, 
    {addMessage, updateMessage})
    (Dialogs);

export default DialogsContainer;