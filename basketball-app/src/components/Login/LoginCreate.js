import React from 'react';
import { Link } from 'react-router-dom';
import firebase  from '../../firebase';
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../hooks/useForm';

const LoginCreate = () => {

    const email = useForm('email');
    const username = useForm();
    const password = useForm();

    function handleSubmit(event) {
        event.preventDefault();

        firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
            .catch(err => {
                console.log(err);
            })
    }

    return (<section>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <Input label="Username" type="text" name="Username" {...username} />
            <Input label="Email" type="email" name="email" {...email} />
            <Input label="Password" type="password" name="password" {...password} />
            <Button>Submit</Button>
        </form >
        <Link to="/login">Login</Link>
    </section>);
};

export default LoginCreate;