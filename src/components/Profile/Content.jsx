import css from './Content.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Content = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts />
        </div>
    );
}

export default Content;