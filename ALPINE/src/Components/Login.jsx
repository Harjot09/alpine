// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
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
//     // Example: Password must be at least 8 characters long
//     return password.length >= 8;
//   };

//   const handleUsernameChange = (e) => {
//     const email = e.target.value;
//     setUsername(email);
//     if (!validateEmail(email)) {
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

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateEmail(username) && validatePassword(password)) {
//       // Handle form submission
//       console.log('Form submitted with:', { username, password });
//     } else {
//       console.log('Form has errors.');
//     }
//   };

//   const handleSign = (e) => {
//     e.preventDefault();
//     if (username === '' && password === '') {
//       alert('Please fill the form');
//       return;
//     }
//     localStorage.setItem('logged', true);
//     alert("login successfull");
//     navigate("/");
//     window.location.reload();
//   }

//   return (
//     <div className='login-body'>
//       <div className="background">
//         <div className="shape"></div>
//         <div className="shape"></div>
//       </div>

//       <div className="login-container">
//         <form onSubmit={handleSubmit}>
//           <h3>SIGN UP </h3>

//           <label htmlFor="username">Username</label>
//           <input 
//             type="text" 
//             placeholder="Email" 
//             id="username" 
//             value={username}
//             onChange={handleUsernameChange}
//             required 
//           />
//           {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}

//           <label htmlFor="username">Phone No.</label>
//           <input 
//             type="text" 
//             placeholder=" Phone" 
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

//           <button type="submit" onClick={(e) => {handleSign(e)}}>Log In</button>
//           <a href="create.html" style={{color: "white"}} className="navbar-link" data-nav-link>Create account </a>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SignUp;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/; // Validates a 10-digit number
    return phoneRegex.test(phone);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleUsernameChange = (e) => {
    const email = e.target.value;
    setUsername(email);
    if (!validateEmail(email)) {
      setUsernameError("Invalid email format.");
    } else {
      setUsernameError("");
    }
  };

  const handlePhoneChange = (e) => {
    const phoneNumber = e.target.value;
    setPhone(phoneNumber);
    if (!validatePhone(phoneNumber)) {
      setPhoneError("Phone number must be 10 digits.");
    } else {
      setPhoneError("");
    }
  };

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    if (!validatePassword(pwd)) {
      setPasswordError("Password must be at least 8 characters long.");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      validateEmail(username) &&
      validatePhone(phone) &&
      validatePassword(password)
    ) {
      alert("Sign-up successful!");
      localStorage.setItem("logged", true);
      navigate("/");
      window.location.reload();
    } else {
      alert("Please fix the errors in the form.");
    }
  };

  return (
    <div className="login-body">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <label htmlFor="username">Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          {usernameError && <p className="error">{usernameError}</p>}

          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            placeholder="Enter your phone number"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
          {phoneError && <p className="error">{phoneError}</p>}

          <label htmlFor="password">Password</label>
          <input
            type="text"
            placeholder="Enter your password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {passwordError && <p className="error">{passwordError}</p>}

          <button type="submit">Sign Up</button>
          <p className="alternate">
            Already have an account? <a href="/login">Log in</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;