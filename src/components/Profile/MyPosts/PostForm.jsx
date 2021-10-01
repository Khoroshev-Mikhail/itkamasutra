import React from 'react';
import { Field, reduxForm } from 'redux-form'

const PostForm = (props) => {
    return(
        <form>
            <Field placeholder={'login'} name={'login'} component={'input'}/>
            <button >Add Post</button>
        </form>
    )
}

export default PostForm;