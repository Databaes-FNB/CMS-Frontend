import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./SignUp.css"; // Import CSS file

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

    // Password strength check
    if (!passwordRegex.test(registerData.password)) {
      alert("Password must be at least 8 characters long, contain an uppercase letter, a number, and a special character.");
      return;
    }

    // Save registration data to localStorage (simple storage approach)
    const userData = {
      fullName: registerData.fullName,
      email: registerData.email,
      password: registerData.password,
      cohort: registerData.cohort,
      stream: registerData.stream,
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    // After successful registration, redirect to Sign In page
    alert("Registration Successful! 🎉 You can now log in.");
    navigate("/signin");
  };

  return (
    <div className="signup-container">
      {/* Left Section - Text and Background Image */}
      <div className="left-section">
        <div className="text-container">
          <h1>Welcome Interns!</h1>
          <p>We’re excited to have you join our community. By registering, you'll gain access to all the resources, opportunities, and support you need to thrive in your role.</p>
          <p>Fill in the details on the right to create your account, and you’ll be one step closer to starting your internship journey with us!</p>
          <h3>Let’s get started!</h3>
        </div>
      </div>

      {/* Right Section - Form Inputs */}
      <div className="right-section">
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
  );
}

export default SignUp;
