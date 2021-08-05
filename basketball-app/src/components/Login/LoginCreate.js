import React from 'react';
import firebase from '../../firebase';
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as BasketBallPlayer } from '../../assets/greek_freak.svg';
import styles from '../Home.module.css';

const LoginCreate = () => {

    const email = useForm('email');
    const username = useForm();
    const password = useForm();
    const navigate = useNavigate();

   async function handleSubmit(event) {
        event.preventDefault();
        try {
            await firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
            alert(`${username.value}, your account have been created.`);
            navigate('/home', { replace: true });
        }
        catch (err) {
            console.log(err);
            alert(err.message);
        }
    }

    return (<main className={styles.main}>
        <h1>Sign Up</h1>
        <section className={`${styles.section}`}>
            <BasketBallPlayer />
            <form className={`${styles.loginForm} ${styles.signUp}`} onSubmit={handleSubmit}>
                <Input label="Username" type="text" name="Username" {...username} />
                <Input label="Email" type="email" name="email" {...email} />
                <Input label="Password" type="password" name="password" {...password} />
                <Button>Submit</Button>
            </form >
        </section>
    </main>);
};

export default LoginCreate;