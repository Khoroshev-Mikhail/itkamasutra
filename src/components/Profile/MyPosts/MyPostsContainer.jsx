import { addPost } from '../../../redux/postreducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux'

const f1 = (state) => {
    return {
        postData : state.posts.postData,
        newPostText : state.posts.newPostText
    }
}


let MyPostsContainer = connect(f1, 
    {addPost}
    )(MyPosts)
export default MyPostsContainer;