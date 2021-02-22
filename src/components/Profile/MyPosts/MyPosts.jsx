import css from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import React from 'react';



const MyPosts = (props) => {

console.log(props)
    let postData = props.postData.map(el => <Post message={el.message} likeCount={el.likes} id={el.id} />);
    
    let textarea = React.createRef();

    let addPost = () => {
        let text = textarea.current.value;
        props.addPost(text);
    }

    return (
            <div className={css.my_posts}>
            my posts
                <div>
                <textarea ref={textarea}>Write new post</textarea><br />
                <button onClick={ addPost }>Add Post</button>
                </div>
                <div className={css.posts}>
                    {postData}
                </div>
            </div>
    );
}

export default MyPosts;