import css from './FriendsBar.module.css';
import FriendsAva from './FriendAvatar/FriendsAva';

const FriendsBar = (props) => {
    let friends = props.friendsBar.map(el => <FriendsAva name={el.name} />)
    return (
        <div className={css.friendsBar}>
            <h3>Friends</h3>
            <div className={css.friendsBar_line}>
                {friends}
            </div>
        </div>
    );
}

export default FriendsBar;