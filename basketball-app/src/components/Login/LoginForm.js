import React from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../firebase';
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../hooks/useForm';

const LoginForm = () => {
    const email = useForm('email');
    const password = useForm();

    function handleSubmit(event) {
        event.preventDefault();

        if (email.validate() && password.validate()) {
            firebase.auth().signInWithEmailAndPassword(email.value, password.value)
                .catch(err => {
                    console.log(err);
                })
        }
    }


    return (<section>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <Input label="Email" type="email" name="email" {...email} />
            <Input label="Password" type="password" name="password" {...password} />
            <Button>Login</Button>
        </form >
        <Link to="/login/signup">Sign Up</Link>
    </section>);
};

export default LoginForm;