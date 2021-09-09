import { NavLink } from 'react-router-dom';
import logo from './../../logo.svg';
import css from './Header.module.css';

const Header = () => {
    return (
        <header className={css.header}>
            <img src={logo} className="App-logo" alt="logo" />
            <div className={css.left}>
                <NavLink to="#">
                    Login
                </NavLink>
            </div>
        </header>
    );
}

export default Header;