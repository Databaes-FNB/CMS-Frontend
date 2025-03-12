import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./LandingPage.css"; // Import CSS file

function LandingPage() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // State for Login
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  // State for Registration
  const [registerData, setRegisterData] = useState({
    fullName: "",
    cohort: "",
    stream: "",
    password: "",
    confirmPassword: "",
  });

  // Dummy database for storing registered users
  const [users, setUsers] = useState([
    { username: "testuser", password: "password123" },
  ]);

  // Handle input changes for Login
  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // Handle input changes for Registration
  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  // Sign In Logic
  const handleSignIn = () => {
    const normalizedUsername = loginData.username.toLowerCase().replace(/\s+/g, "");

    const userExists = users.find(
      (user) =>
        user.username === normalizedUsername && user.password === loginData.password
    );

    if (userExists) {
      // Navigate to the Dashboard after successful login
      navigate("/Intern");  // Use navigate to go to the Dashboard
      alert("Login Successful! 🎉");
    } else {
      alert("Invalid Username or Password. Please try again.");
    }
  };

  // Sign Up Logic
  const handleSignUp = () => {
    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const newUser = {
      username: registerData.fullName.toLowerCase().replace(/\s+/g, ""),
      password: registerData.password,
    };

    setUsers([...users, newUser]);
    alert("Registration Successful! 🎉 You can now log in.");
  };

  return (
    <div className="container">
      {/* Left Section - Login */}

      <img src="/logo.png" alt="Logo" className="logo" />

      <div className="left-section">
        <h2>Create an account</h2>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="input-field"
          value={registerData.fullName}
          onChange={handleRegisterChange}
        />
        <input
          type="text"
          name="cohort"
          placeholder="Cohort"
          className="input-field"
          value={registerData.cohort}
          onChange={handleRegisterChange}
        />
        <input
          type="text"
          name="stream"
          placeholder="Stream"
          className="input-field"
          value={registerData.stream}
          onChange={handleRegisterChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input-field"
          value={registerData.password}
          onChange={handleRegisterChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="input-field"
          value={registerData.confirmPassword}
          onChange={handleRegisterChange}
        />
        <button className="btn" onClick={handleSignUp}>Sign Up</button>
      </div>

      {/* Right Section - Registration */}
      <div className="right-section">   
         <h2>Welcome Back !!</h2>
        <p>We're glad to see you again! Log in to access your account and continue where you left off.</p>
        <input
          type="text"
          name="username"
          placeholder="Name"
          className="input-field"
          value={loginData.username}
          onChange={handleLoginChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input-field"
          value={loginData.password}
          onChange={handleLoginChange}
        />
        <a href="#" className="forgot-password">Forgot password?</a>
        <button className="btn" onClick={handleSignIn}>Sign In</button>
      </div>
    </div>
  );
}

export default LandingPage;
