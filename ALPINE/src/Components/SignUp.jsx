// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import "./SignUp.css";

// const SignUp = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validatePassword = (password) => {
//     // Password must be at least 8 characters long
//     return password.length >= 8;
//   };

//   const handleUsernameChange = (e) => {
//     const email = e.target.value;
//     setUsername(email);
//     if (!validateEmail(email)) {
//       setUsernameError('Please enter a valid email address.');
//     } else {
//       setUsernameError('');
//     }
//   };

//   const handlePasswordChange = (e) => {
//     const pwd = e.target.value;
//     setPassword(pwd);
//     if (!validatePassword(pwd)) {
//       setPasswordError('Password must be at least 8 characters long.');
//     } else {
//       setPasswordError('');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateEmail(username) && validatePassword(password)) {
//       try {
//         const response = await axios.post('http://localhost:5000/login', {
//           email: username,
//           password: password,
//         });

//         if (response.status === 200) {
//           // Handle successful login
//           localStorage.setItem('logged', true);
//           alert('Login successful');
//           navigate('/');
//           window.location.reload();
//         }
//       } catch (error) {
//         console.error('Error during login:', error);
//         alert('Invalid email or password.');
//       }
//     } else {
//       console.log('Form has errors.');
//     }
//   };

//   return (
//     <div className='login-body'>
//       <div className="background">
//         <div className="shape"></div>
//         <div className="shape"></div>
//       </div>

//       <div className="login-container">
//         <form onSubmit={handleSubmit}>
//           <h3>Login Here</h3>

//           <label htmlFor="username">Username</label>
//           <input 
//             type="text" 
//             placeholder="Email or Phone" 
//             id="username" 
//             value={username}
//             onChange={handleUsernameChange}
//             required 
//           />
//           {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}

//           <label htmlFor="password">Password</label>
//           <input 
//             type="password" 
//             placeholder="Password" 
//             id="password" 
//             value={password}
//             onChange={handlePasswordChange}
//             required 
//           />
//           {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}

//           <button type="submit">Log In</button>
          
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SignUp;




//Signup.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './SignUp.css';

const Signup = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true); // Track login/signup state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle form submission (login or signup)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "/login" : "/signup"; // Determine endpoint

    try {
      // Send request to backend
      const response = await axios.post(`http://localhost:5000${endpoint}`, {
        email,
        password,
      });

      if (isLogin) {
        // Handle login success
        window.alert(response.data.message); // Show success alert
        localStorage.setItem("loggedIn", true);
        navigate("/"); // Redirect after login
      } else {
        // Handle signup success
        window.alert(response.data.message); // Show success alert
        setIsLogin(true); // Switch to login view
      }
    } catch (err) {
      // Handle errors
      const errorMessage = err.response?.data?.message || "Something went wrong. Please try again.";
      window.alert(`Error: ${errorMessage}`); // Show error alert
      setError(errorMessage);
    }
  };

  // Handle switching between Login and Signup with confirmation
  const handleSwitch = () => {
    const confirmation = window.confirm(`
      Are you sure you want to switch to ${isLogin ? "Sign Up" : "Log In"}?
    `);
    if (confirmation) {
      setIsLogin(!isLogin);
      setError(""); // Clear any existing errors
    }
  };

  return (
    <div className="signup-page"> {/* Apply the background only to the signup page */}
      <div className="auth-container">
        <form onSubmit={handleSubmit}>
          <h3>{isLogin ? "Login" : "Sign Up"}</h3>

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit">{isLogin ? "Log In" : "Sign Up"}</button>

          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              onClick={handleSwitch}
              style={{ cursor: "pointer", color: "blue" }}
            >
              {isLogin ? "Sign Up" : "Log In"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;