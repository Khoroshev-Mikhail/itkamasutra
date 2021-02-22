import css from './Content.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Content = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postData = {props.postData} 
                addPost={props.addPost} 
                newPostText={props.newPostText}
                updateNewPostText = {props.updateNewPostText}
                />
        </div>
    );
}

export default Content;