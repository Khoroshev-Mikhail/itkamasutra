import css from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {
    return (
            <div className={css.my_posts}>
            my posts
                <div>
                <textarea></textarea><br />
                <button>Add Post</button>
                </div>
                <div className={css.posts}>
                    <Post message='Hi, how are you?' likeCount='15' />
                    <Post message="it's my first post!" likeCount='15' />
                </div>
            </div>
    );
}

export default MyPosts;