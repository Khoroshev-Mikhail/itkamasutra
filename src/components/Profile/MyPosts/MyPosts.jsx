import css from './MyPosts.module.css';
import Post from './Post/Post.jsx';

let postData = [
    {id: 1, message: 'Hi, how are you?', likes: 15},
    {id: 2, message: 'I am fine!', likes: 122},
    {id: 3, message: 'we are fine too', likes: 222},
]
let posts = postData.map(el => <Post message={el.message} likeCount={el.likes} />)


const MyPosts = (props) => {
    return (
            <div className={css.my_posts}>
            my posts
                <div>
                <textarea>Write new post</textarea><br />
                <button>Add Post</button>
                </div>
                <div className={css.posts}>
                    {posts}
                </div>
            </div>
    );
}

export default MyPosts;