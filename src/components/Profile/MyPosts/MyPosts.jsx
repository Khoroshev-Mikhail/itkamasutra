import css from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import React from 'react';
import { Field, reduxForm } from 'redux-form'
import {maxLengthCreator, required} from './../../Utils/Validators/validators'
import { Element } from '../../Common/FormsControls/FormControls';

const MyPosts = (props) => {
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

const maxLength10 = maxLengthCreator(10)
const TextArea = Element('textarea')
const PostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'New your post...'} name={'newPostText'} component={TextArea} validate={[ required, maxLength10]}/>
                <p><button>Add Post</button></p>
            </div>
        </form>
    )
}

const ReduxPostForm = reduxForm({form : 'newPost'})(PostForm)