import React from 'react';
import styles from './Table.module.css';

const Table = () => {
    return (<div className={styles.content}>
        <h5>Basketball Players</h5>
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Adress</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Luke Skywalker</td>
                    <td>18</td>
                    <td>Tatooine</td>
                </tr>
                <tr>
                    <td>Arlindo</td>
                    <td>13</td>
                    <td>Rio Grande do Norte</td>
                </tr>
                <tr>
                    <td>Leia Organa</td>
                    <td>18</td>
                    <td>Aldeeran</td>
                </tr>
            </tbody>
        </table>
    </div>);
};

export default Table;