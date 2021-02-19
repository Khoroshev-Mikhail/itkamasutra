import css from './Content.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';

const Content = () => {
    return (
        <div className={css.content}>
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