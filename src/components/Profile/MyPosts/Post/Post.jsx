import css from './Post.module.css';

const Post = (props) => {
    return (
        <div className={css.post}>
            <img src="https://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/678x380"/>
            <p>{props.message}</p>
            <span>Like: {props.likeCount}</span>
        </div>

    );
}

export default Post;