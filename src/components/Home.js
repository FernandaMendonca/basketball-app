import React from 'react';
import styles from './Home.module.css';
import { ReactComponent as BasketBall } from '../assets/basketball_homepage.svg';
import LoginForm from './Login/LoginForm';

const Home = () => {
    return <main className={styles.main}>
        <div><h1 className={styles.title}>plan and track your results</h1></div>
        <section className={styles.section}>
            <BasketBall />
            <LoginForm />
        </section>
    </main>;
};

export default Home;