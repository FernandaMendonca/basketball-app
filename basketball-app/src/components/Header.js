import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link className={styles.logo} to="/" aria-label="Basketball App - Home">
                    Home
                </Link>
                <Link className={styles.login} to="/login">
                    Sign in
                </Link>
            </nav>
        </header>;
};

export default Header;