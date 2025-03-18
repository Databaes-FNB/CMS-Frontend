

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./SignUp.css"; // Import CSS file
import SignIn from "./SignIn";

function SignUp() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    cohort: "",
    stream: "",
  });

  // Regular expression for password validation
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Regular expression for email validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSignUp = () => {
    // Password mismatch check
    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Required fields validation
    if (!registerData.fullName || !registerData.email || !registerData.password || !registerData.confirmPassword || !registerData.cohort || !registerData.stream) {
      alert("All fields are required!");
      return;
    }

    // Email format validation
    if (!emailRegex.test(registerData.email)) {
      alert("Please enter a valid email address!");
      return;
    }

    // Password strength check
    if (!passwordRegex.test(registerData.password)) {
      alert("Password must be at least 8 characters long, contain an uppercase letter, a number, and a special character.");
      return;
    }

    // Get the existing users from localStorage or initialize an empty array
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email already exists
    const isEmailExist = existingUsers.some(user => user.email === registerData.email);
    if (isEmailExist) {
      alert("Email already registered. Please log in.");
      return;
    }

    // Add the new user to the existing users array
    const newUser = {
      fullName: registerData.fullName,
      email: registerData.email,
      password: registerData.password,
      cohort: registerData.cohort,
      stream: registerData.stream,
    };
    
    existingUsers.push(newUser);

    // Save the updated users array to localStorage
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // After successful registration, redirect to Sign In page
    alert("Registration successful! Please sign in.");
    navigate("/signin");
  };

  return (
    <div className="signup-container">
      <div className="left-section">
        <div className="text-container">
          <h1>Welcome Interns!</h1>
          <p>We’re excited to have you join our community. By registering, you'll gain access to all the resources, opportunities, and support you need to thrive in your role.</p>
          <p>Fill in the details on the right to create your account, and you’ll be one step closer to starting your internship journey with us!</p>
          <h3>Let’s get started!</h3>
          <span
            className="signin-link"
            onClick={() => navigate("/signin")}
          >
            Already have an account? Sign In
          </span>
        </div>
      </div>

      <div className="right-section">
        <div className="down-arrow">
        <h2>Create an Account</h2>
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
          type="email"
          name="email"
          placeholder="Email"
          className="input-field"
          value={registerData.email}
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

        </div>
       
    </div>
  );
}

export default SignUp;
