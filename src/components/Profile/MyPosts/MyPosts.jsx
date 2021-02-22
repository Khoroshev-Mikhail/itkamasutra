import css from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import React from 'react';

const MyPosts = (props) => {

console.log(props)
    let postData = props.postData.map(el => <Post message={el.message} likeCount={el.likes} id={el.id} />);
    
    let textarea = React.createRef();

    let addPost = () => {
        props.addPost();
    }
    
    let onPostChange = () => {
        props.updateNewPostText(textarea.current.value);
    }

    return (
            <div className={css.my_posts}>
            my posts
                <div>
                <textarea ref={textarea} value={props.newPostText} onChange={onPostChange}>Write new post</textarea><br />
                <button onClick={ addPost }>Add Post</button>
                </div>
                <div className={css.posts}>
                    {postData}
                </div>
            </div>
    );
}

export default MyPosts;