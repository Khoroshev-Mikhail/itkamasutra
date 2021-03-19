import css from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import React from 'react';
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/state';

const MyPosts = (props) => {

console.log(props)

    let postData = props.state.posts.postData.map(el => <Post message={el.message} likeCount={el.likes} id={el.id} />);
    
    let textarea = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    
    let onPostChange = () => {
        let text = textarea.current.value;
        props.dispatch(updatePostActionCreator(text));
    }

    return (
            <div className={css.my_posts}>
            my posts
                <div>
                <textarea ref={textarea} value={props.state.posts.newPostText} onChange={onPostChange}>Write new post</textarea><br />
                <button onClick={ addPost }>Add Post</button>
                </div>
                <div className={css.posts}>
                    {postData}
                </div>
            </div>
    );
}

export default MyPosts;