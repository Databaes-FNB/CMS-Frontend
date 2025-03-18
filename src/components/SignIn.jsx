// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate hook
// import "./SignIn.css"; // Import the CSS styles

// function SignIn() {
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   const [registerData, setRegisterData] = useState({
//     username: "",
//     password: "",
//   });

//   const handleRegisterChange = (e) => {
//     setRegisterData({ ...registerData, [e.target.name]: e.target.value });
//   };
//   const handleSignIn = () => {
//     const { username, password } = registerData;
  
//     // Check if username is admin or mentor
//     if (password === "Password#1") {
//       if (username === "admin") {
//         alert("Welcome Admin!");
//         navigate("/Admin/AdminDashboard");
//       } else if (username === "mentor") {
//         alert("Welcome Mentor!");
//         navigate("/Mentor/MentorDashboard");
//       } else {
//         alert("Invalid username for the given password!");
//       }
//       return;
//     }
  
//     // Get the user data from localStorage
//     const storedUserData = JSON.parse(localStorage.getItem("userData"));
  
//     if (storedUserData) {
//       if (username === storedUserData.email && password === storedUserData.password) {
       
  
//         // Pass the full name to the next page using state
//         navigate("/InternPage", { state: { username: storedUserData.fullName || storedUserData.email } });
//       } else {
//         alert("Incorrect login details!");
//       }
//     } else {
//       alert("No user found. Please register first.");
//     }
//   };
  

//   const handleForgotPassword = () => {
//     navigate("/forgot-password"); // Navigate to forgot password page
//   };

//   return (
//     <div className="signin-page">
//       <div className="signin-container">
//         <div className="left-section">
//           <div className="text-container">
//             <h1>Welcome Back</h1>
//             <p>Sign in to continue access</p>
//           </div>
//         </div>

//         <div className="right-section">
//           <div className="input-section">
           
//           </div>
//           <h2>LOGIN</h2>
//             <input
//               type="text"
//               name="username"
//               placeholder="Username / Email"
//               className="input-field-1"
//               value={registerData.username}
//               onChange={handleRegisterChange}
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               className="input-field-1"
//               value={registerData.password}
//               onChange={handleRegisterChange}
//             />

//           <button className="btn" onClick={handleSignIn}>Sign In</button>
//           <span 
//               className="forgot-password-link" 
//               onClick={handleForgotPassword}
//             >
//               Forgot Password?
//             </span>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignIn;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css"; // Import the CSS styles

function SignIn() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
  });

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSignIn = () => {
    const { username, password } = registerData;

   
    if (password === "Password#1") {
      if (username === "admin") {
        navigate("/Admin/AdminDashboard");
      } else if (username === "mentor") {
        navigate("/Mentor/MentorDashboard");
      } else {
        alert("Invalid username for the given password!");
      }
      return;
    }

    // Get the list of users from localStorage
    const users = JSON.parse(localStorage.getItem("users"));

    if (users) {
      const matchedUser = users.find(
        (user) => user.email === username && user.password === password
      );

      if (matchedUser) {
        // Pass the full name to the next page using state
        navigate("/InternPage", { state: { username: matchedUser.fullName } });
      } else {
        alert("Incorrect login details!");
      }
    } else {
      alert("No user found. Please register first.");
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password"); // Navigate to forgot password page
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        <div className="left-section">
          <div className="text-container">
            <h1>Welcome Back</h1>
            <p>Sign in to continue access</p>
          </div>
        </div>

        <div className="right-section">
          <h2>LOGIN</h2>
          <input
            type="text"
            name="username"
            placeholder="Username / Email"
            className="input-field-1"
            value={registerData.username}
            onChange={handleRegisterChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-field-1"
            value={registerData.password}
            onChange={handleRegisterChange}
          />
          <button className="btn" onClick={handleSignIn}>Sign In</button>
          <span
            className="forgot-password-link"
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
