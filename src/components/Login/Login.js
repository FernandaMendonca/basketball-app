import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import LoginCreate from './LoginCreate';

const Login = () => {
    return <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<LoginCreate />} />
        </Routes>
    </div>;
};

export default Login;