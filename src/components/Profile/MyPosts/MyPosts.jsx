import css from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import React from 'react';

const MyPosts = (props) => {

    let textarea = React.createRef();

    let addPost = () => {
        props.addPost();
    }
    
    let onPostChange = () => {
        let text = textarea.current.value;
        props.updatePost(text);
    }
    let postData = props.postData.map(el => <Post message={el.message} likeCount={el.likes} id={el.id} />);
    return(
        <div className={css.my_posts}>
            <div>
            <textarea ref={textarea} value={props.newPostText} onChange={onPostChange}>Write new post</textarea><br />
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