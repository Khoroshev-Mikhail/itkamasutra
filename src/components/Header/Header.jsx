import logo from './../../logo.svg';
import css from './Header.module.css';

const Header = () => {
    return (
        <header className={css.header}>
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    );
}

export default Header;