import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as BasketBall } from '../assets/basketball_homepage.svg';

const Home = () => {
    return <div className={styles.header}>
        <BasketBall />
    </div>;
};

export default Home;