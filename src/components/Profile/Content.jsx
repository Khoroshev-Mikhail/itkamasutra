import css from './Content.module.css';
import MyPosts from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Content = (props) => {
    return (
        <div>
            <ProfileInfo 
                profile={props.profile} 
                getStatus={props.getStatus} 
                updateStatus={props.updateStatus} 
                status={props.status}/>
            <MyPosts
                dispatch={props.dispatch}
                state={props.state}
                />
        </div>
    );
}

export default Content;