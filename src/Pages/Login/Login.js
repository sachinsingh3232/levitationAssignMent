import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './Login.css'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async () => {
        if (!email || !password) {
            alert('enter all the fields');
        }
        try {
            const res = await axios.post('https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/auth/login',
                {
                    "email": email,
                    "password": password
                },
            )
            await res.data.authToken && localStorage.setItem("token", res.data.authToken);
            navigate('/form')
            console.log(res);
        } catch (e) {
            alert('Login Failed');
            console.log(e)
        }
    };

    return (
        <div className="login-container">
            <h1 className="login-heading">Login</h1>
            <div className="login-form">
                <label className="login-label">Email</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="login-input"
                />
                <label className="login-label">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="login-input"
                />
                <button onClick={handleLogin} className="login-button">Login</button>
                <div onClick={() => { navigate('/forgotPassword') }} className="forgot-button">forgotPassword</div>
            </div>
        </div>
    );
};

export default Login;
