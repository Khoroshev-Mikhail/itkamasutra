import css from './Content.module.css';
import MyPosts from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Content = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPosts
                dispatch={props.dispatch}
                state={props.state}
                />
        </div>
    );
}

export default Content;