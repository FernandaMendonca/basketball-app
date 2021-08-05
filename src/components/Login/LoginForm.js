import React from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from '../../firebase';
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../hooks/useForm';
import styles from '../Home.module.css';

const LoginForm = () => {
    const email = useForm('email');
    const password = useForm();
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await firebase.auth().signInWithEmailAndPassword(email.value, password.value);
            navigate('/home', { replace: true });
        }
        catch (err) {
            console.log(err);
            alert(err.message);
        }
    }

    return (<div className={styles.loginForm}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <Input label="Email" type="email" name="email" {...email} />
            <Input label="Password" type="password" name="password" {...password} />
            <Button>Login</Button>
        </form >
    </div>);
};

export default LoginForm;