import React, { useState } from 'react';
import './ForgotPassword.css'
import { useNavigate } from 'react-router-dom';
const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate()

    const handleResetPassword = () => {
        // Perform password reset logic here
        console.log('Resetting password...');
    };

    return (
        <div className="forgot-password-container">
            <h1 className="forgot-password-heading">Forgot Password</h1>
            <div className="forgot-password-form">
                <label className="forgot-password-label">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="forgot-password-input"
                />
                <button onClick={handleResetPassword} className="forgot-password-button">
                    Reset Password
                </button>
                <button onClick={() => { navigate('/') }} className="back-button">
                    Back
                </button>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
