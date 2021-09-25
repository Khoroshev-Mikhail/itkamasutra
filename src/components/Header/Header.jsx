import { NavLink } from 'react-router-dom';
import logo from './../../logo.svg';
import css from './Header.module.css';

const Header = (props) => {
    
    console.log(props)
    return (
        <header className={css.header}>
            <img src={logo} className="App-logo" alt="logo" />
            <div className={css.left}>
                {props.isAuth ? 'ara' : <NavLink to="#">Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;