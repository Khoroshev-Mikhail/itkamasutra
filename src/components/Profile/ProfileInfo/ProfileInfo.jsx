import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if(!props.profile){
        return 'zzz'
    }
    return (
        <div>
            <div>
                header LJL
            </div>
            <div>
                <img src={props.profile.photos.large} />
                <p>{props.profile.aboutMe}</p>
            </div>
            <ProfileStatus status={'I am a top-100 programmer in the world'}/>
        </div>
    );
}

export default ProfileInfo;