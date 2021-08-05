import React from 'react';
import styles from './Home.module.css';
import Table from '../components/Results/Table'

const Results = () => {

    return <main className={styles.main}>
        <div><h1 className={styles.title}>Welcome</h1></div>
        <section className={`${styles.section} ${styles.results}`}>
            <Table></Table>
        </section>
    </main>;
};

export default Results;