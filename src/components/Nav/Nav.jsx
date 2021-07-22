import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';
import FriendsBar from './FriendsBar/FriendsBar';

const Nav = (props) => {
    return (
        <nav className={css.nav}>
            <div>
                <NavLink to="/Content" activeClassName={css.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/Dialogs" activeClassName={css.active}>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/Users' activeClassName={css.active}>Users</NavLink>
            </div>
            <div>
                <a href="">News</a>
            </div>
            <div>
                <a href="">Music</a>
            </div>
            <div>
                <NavLink to="/MyApp" activeClassName={css.active}>MyApp</NavLink>
            </div>

            <FriendsBar state = {props.state} />

        </nav>
    );
}

export default Nav;