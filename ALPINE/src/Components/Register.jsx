import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    if (value.trim() === '') {
      setNameError('Name cannot be empty.');
    } else {
      setNameError('');
    }
  };

  const handleUsernameChange = (e) => {
    const email = e.target.value;
    setUsername(email);
    if (!validateEmail(email)) {
      setUsernameError('Please enter a valid email address.');
    } else {
      setUsernameError('');
    }
  };

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    if (!validatePassword(pwd)) {
      setPasswordError('Password must be at least 8 characters long.');
    } else {
      setPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPwd = e.target.value;
    setConfirmPassword(confirmPwd);
    if (confirmPwd !== password) {
      setConfirmPasswordError('Passwords do not match.');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() !== '' &&
      validateEmail(username) &&
      validatePassword(password) &&
      password === confirmPassword
    ) {
      console.log('Registration Successful:', { name, username, password });
      alert('Registration Successful');
      navigate('/'); // Redirect after successful registration
    } else {
      alert('Please correct the errors before submitting.');
    }
  };

  return (
    <div className='register-body'>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <div className="register-container">
        <form onSubmit={handleSubmit}>
          <h3>Register Here</h3>

          <label htmlFor="name">Full Name</label>
          <input 
            type="text" 
            placeholder="Full Name" 
            id="name" 
            value={name}
            onChange={handleNameChange}
            required 
          />
          {nameError && <p style={{ color: 'red' }}>{nameError}</p>}

          <label htmlFor="username">Email</label>
          <input 
            type="text" 
            placeholder="Email" 
            id="username" 
            value={username}
            onChange={handleUsernameChange}
            required 
          />
          {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}

          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            placeholder="Password" 
            id="password" 
            value={password}
            onChange={handlePasswordChange}
            required 
          />
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input 
            type="password" 
            placeholder="Confirm Password" 
            id="confirmPassword" 
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required 
          />
          {confirmPasswordError && <p style={{ color: 'red' }}>{confirmPasswordError}</p>}

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;