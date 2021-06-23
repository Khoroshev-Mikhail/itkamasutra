import React from 'react';
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/postreducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux'

/*const MyPostsContainer = (props) => {
    return (
            <MyPosts 
            state={props.state} 
            updateNewPostText={(text) => {
                props.dispatch(updatePostActionCreator(text))
            }}
            addPostActionCreator={()=>{
                props.dispatch(addPostActionCreator())
            }}
            />
    );
}

*/
const f1 = (state) => {
    return {
        state : state
    }
}

const f2 = (dispatch) => {
    return {
        updateNewPostText : (text) => {dispatch(updatePostActionCreator(text)) },
        addPostActionCreator : ()=>{dispatch(addPostActionCreator())}
    }
}

let MyPostsContainer = connect(f1, f2)(MyPosts)


export default MyPostsContainer;