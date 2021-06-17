import React from 'react';
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/postreducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
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

export default MyPostsContainer;