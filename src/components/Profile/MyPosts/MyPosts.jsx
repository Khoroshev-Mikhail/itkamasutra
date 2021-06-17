import css from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import React from 'react';

const MyPosts = (props) => {

    let textarea = React.createRef();

    let addPost = () => {
        props.addPostActionCreator();
    }
    
    let onPostChange = () => {
        let text = textarea.current.value;
        props.updateNewPostText(text);
    }
    let postData = props.state.posts.postData.map(el => <Post message={el.message} likeCount={el.likes} id={el.id} />);
    return(
        <div className={css.my_posts}>
            <div>
            <textarea ref={textarea} value={props.state.posts.newPostText} onChange={onPostChange}>Write new post</textarea><br />
            <button onClick={ addPost }>Add Post</button>
            </div>
            <div className={css.posts}>
                <p>my posts</p>
                {postData}
            </div>
        </div>
    )
}

export default MyPosts;