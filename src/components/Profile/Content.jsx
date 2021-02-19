import css from './Content.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';

const Content = () => {
    return (
        <div>
            <div>
            header
            </div>
            <div>
            ava + descs
            </div>
            <MyPosts />
        </div>
    );
}

export default Content;