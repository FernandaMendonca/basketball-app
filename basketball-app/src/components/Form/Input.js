import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type, name, value, onChange, onBlur, error }) => {
    return <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={name}>{label}</label>
        <input id={name} name={name} type={type} className={styles.input} value={value} onChange={onChange} onBlur={onBlur}/>
        {error && <span className={styles.error}>{error}</span>}
    </div>
}

export default Input;