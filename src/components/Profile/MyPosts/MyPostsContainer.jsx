import { addPostActionCreator, updatePostActionCreator } from '../../../redux/postreducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux'

const f1 = (state) => {
    return {
        postData : state.posts.postData,
        newPostText : state.posts.newPostText
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