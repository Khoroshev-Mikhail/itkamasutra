import { connect } from 'react-redux';
import css from './ProfileInfo.module.css';

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
        </div>
    );
}

export default ProfileInfo;