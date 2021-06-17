import React from 'react'
import { connect } from 'react-redux';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogsreducer';
import Dialogs from './Dialogs';

/*const DialogsContainer = (props) => {

    return (
        <Dialogs 
        updateMessageActionCreator={(text) => {
            props.dispatch(updateMessageActionCreator(text));
        }}
        addMessageActionCreator={()=>{
            props.dispatch(addMessageActionCreator());
        }}
        messages={props.state.messages}
        />
    );
}*/

let f1 = (state) => {
    return {
        messages : state.messages
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