import { connect } from 'react-redux';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogsreducer';
import Dialogs from './Dialogs';

let f1 = (state) => {
    return {
        messages : state.messages,
        newMessageText : state.messages.newMessageText
    }
}

let f2 = (dispatch) => {
    return {
        updateMessageActionCreator : (text) => { dispatch(updateMessageActionCreator(text)); },
        addMessageActionCreator : ()=>{ dispatch(addMessageActionCreator()); }
    }
}

let DialogsContainer = connect(f1, f2)(Dialogs);

export default DialogsContainer;