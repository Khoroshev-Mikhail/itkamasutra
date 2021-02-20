import css from './../FriendsBar.module.css';

const FriendsAva = (props) => {
    return (
        <div className={css.friendsava}>
            <img src="https://www.blast.hk/attachments/64805/" />
            <p>{props.name}</p>
        </div>
    );
}

export default FriendsAva;