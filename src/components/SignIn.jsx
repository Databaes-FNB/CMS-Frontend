import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./SignIn.css"; // Import the CSS styles



function SignIn() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSignUp = () => {
    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!registerData.fullName || !registerData.email || !registerData.password || !registerData.confirmPassword) {
      alert("All fields are required!");
      return;
    }

    // After successful sign-up, redirect to InternPage with username
    navigate("/internpage", {
      state: { username: registerData.fullName }, // Passing the username to InternPage
    });

    alert("Registration Successful! 🎉 You can now log in.");
  };

  return (
    <div className="signup-container">
      {/* Left Section - Text and Background Image */}
      <div className="left-section">
        <div className="text-container">
          <h1>Welcome Back</h1>
       
       <p>Sign in to continue access</p>
        </div>
   
      </div>

      {/* Right Section - Form Inputs */}
      <div className="right-section">
      <h2>Sign In</h2>
    <input
        type="text"
        name="username"
        placeholder="Username / Email"
        className="input-field"
        value={registerData.username}
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

        <button className="btn" onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
}


export default SignIn;
