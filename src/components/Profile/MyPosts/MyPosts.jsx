import css from './MyPosts.module.css';
import Post from './Post/Post.jsx';



const MyPosts = (props) => {

    let postData = props.postData.map(el => <Post message={el.message} likeCount={el.likes} />);
    
    return (
            <div className={css.my_posts}>
            my posts
                <div>
                <textarea>Write new post</textarea><br />
                <button>Add Post</button>
                </div>
                <div className={css.posts}>
                    {postData}
                </div>
            </div>
    );
}

export default MyPosts;