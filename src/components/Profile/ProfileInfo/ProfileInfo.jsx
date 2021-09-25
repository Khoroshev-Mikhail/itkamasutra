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
            <ProfileStatus 
                status={props.status} 
                getStatus={props.getStatus} 
                updateStatus={props.updateStatus} 
                usersId={props.profile.usersId}
            />
        </div>
    );
}

export default ProfileInfo;