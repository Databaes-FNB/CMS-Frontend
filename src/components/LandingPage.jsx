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

  // Dummy database for storing registered users (passwords should be hashed)
  const [users, setUsers] = useState([
    { username: "testuser", password: "password123" },
  ]);

  // State for Forgot Password
  const [forgotPasswordData, setForgotPasswordData] = useState({ email: "" });

  // State for Password Reset
  const [resetPasswordData, setResetPasswordData] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  // Handle input changes for Login
  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // Handle input changes for Registration
  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  // Handle input changes for Forgot Password
  const handleForgotPasswordChange = (e) => {
    setForgotPasswordData({ ...forgotPasswordData, [e.target.name]: e.target.value });
  };

  // Handle input changes for Reset Password
  const handleResetPasswordChange = (e) => {
    setResetPasswordData({ ...resetPasswordData, [e.target.name]: e.target.value });
  };

  // Validate password strength
  const validatePasswordStrength = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
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

    if (!validatePasswordStrength(registerData.password)) {
      alert("Password must be at least 8 characters long, contain a number, a letter, and a special character.");
      return;
    }

    const newUser = {
      username: registerData.fullName.toLowerCase().replace(/\s+/g, ""),
      password: registerData.password, // On a real backend, password should be hashed here
    };

    setUsers([...users, newUser]);
    alert("Registration Successful! 🎉 You can now log in.");
  };

  // Forgot Password Logic (Simulated)
  const handleForgotPassword = () => {
    // Simulate sending a reset link (in a real app, you'd send this to the server)
    if (!forgotPasswordData.email) {
      alert("Please enter your email address.");
      return;
    }

    const user = users.find((user) => user.username === forgotPasswordData.email.toLowerCase());

    if (user) {
      alert("A password reset link has been sent to your email address.");
      // In a real app, you'd send an email with the reset link here
      setForgotPasswordData({ email: "" }); // Clear the email field
    } else {
      alert("No account found with that email.");
    }
  };

  // Reset Password Logic
  const handleResetPassword = () => {
    if (resetPasswordData.newPassword !== resetPasswordData.confirmNewPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!validatePasswordStrength(resetPasswordData.newPassword)) {
      alert("Password must be at least 8 characters long, contain a number, a letter, and a special character.");
      return;
    }

    // Simulate password reset
    alert("Your password has been successfully reset.");
    // In a real app, update the user's password in the backend here.
    setResetPasswordData({ newPassword: "", confirmNewPassword: "" });
    navigate("/Login"); // Redirect to the login page after successful reset
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
        <a href="#" className="forgot-password" onClick={() => setForgotPasswordData({ email: "" })}>Forgot password?</a>
        <button className="btn" onClick={handleSignIn}>Sign In</button>
      </div>

      {/* Forgot Password Section */}
      {forgotPasswordData.email !== "" && (
        <div className="forgot-password-section">
          <h2>Forgot Password</h2>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input-field"
            value={forgotPasswordData.email}
            onChange={handleForgotPasswordChange}
          />
          <button className="btn" onClick={handleForgotPassword}>Send Reset Link</button>
        </div>
      )}

      {/* Reset Password Section */}
      {resetPasswordData.newPassword !== "" && (
        <div className="reset-password-section">
          <h2>Reset Password</h2>
          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            className="input-field"
            value={resetPasswordData.newPassword}
            onChange={handleResetPasswordChange}
          />
          <input
            type="password"
            name="confirmNewPassword"
            placeholder="Confirm New Password"
            className="input-field"
            value={resetPasswordData.confirmNewPassword}
            onChange={handleResetPasswordChange}
          />
          <button className="btn" onClick={handleResetPassword}>Reset Password</button>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
