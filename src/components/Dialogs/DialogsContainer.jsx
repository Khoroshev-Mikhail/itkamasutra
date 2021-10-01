import { connect } from 'react-redux';
import { addMessage } from '../../redux/dialogsreducer';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import { compose } from 'redux';

let f1 = (state) => {
    return {
        messages : state.messages,
        newMessageText : state.messages.newMessageText,
    }
}

export default compose(
    connect(f1, {addMessage}),
    withAuthRedirect
)(Dialogs)