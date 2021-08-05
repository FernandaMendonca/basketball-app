import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link className={styles.home} to="/" aria-label="Basketball App - Home">
                    Home
                </Link>
                <Link className={styles.login} to="/signup">
                    Sign Up
                </Link>
            </nav>
        </header>;
};

export default Header;