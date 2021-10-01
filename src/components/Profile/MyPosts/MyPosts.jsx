import css from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import React from 'react';
import { Field, reduxForm } from 'redux-form'

const MyPosts = (props) => {

    let textarea = React.createRef();

    let addPost = (formData) => {
        props.addPost(formData.newPostText);
    }
    let postData = props.postData.map(el => <Post message={el.message} likeCount={el.likes} id={el.id} />);
    return(
        <div className={css.my_posts}>
            <div>
                <ReduxPostForm onSubmit={addPost} />
            </div>
            <div className={css.posts}>
                <p>my posts</p>
                {postData}
            </div>
        </div>
    )
}

export default MyPosts;

const PostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'newPostText'} name={'newPostText'} component={'input'}/>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const ReduxPostForm = reduxForm({form : 'newPost'})(PostForm)