import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/actions/userActions'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await dispatch(loginUser({ email, password }));
            // Handle successful login (e.g., redirect to home page)
            navigate('/');
        } catch (error) {
            // Handle login error
        }
    };

    return (
        // ... JSX for login form
    );
};

export default Login;
