import css from './Content.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Content = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                dispatch={props.dispatch}
                state={props.state}
                />
        </div>
    );
}

export default Content;