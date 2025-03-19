
// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
// import './LandingPage.css';
// import background from '../../src/background.png'; // Import the background image

// const LandingPage = () => {
//   const navigate = useNavigate(); // Using useNavigate instead of useHistory

//   const handleSignIn = () => {
//     navigate('/signin'); // Navigate to the sign-in page
//   };

//   const handleSignUp = () => {
//     navigate('/signup'); // Navigate to the sign-up page
//   };

//   return (
//     <div className="container" style={{ background: `url(${background})` }}>
//          <img src="/logo.png" alt="Logo" className="logo" />
//       <h1 className='title'>CAPACITI MANAGEMENT <br></br>SYSTEM</h1>
//       <div className="buttons">
//         <button className="btn-signin" onClick={handleSignIn}>Sign In</button>
//         <button  className="btn-signup" onClick={handleSignUp}>Sign Up</button>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;


import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import './LandingPage.css';
import background from '../../src/background.png'; // Import the background image

const LandingPage = () => {
  const navigate = useNavigate(); // Using useNavigate instead of useHistory

  const handleSignIn = () => {
    navigate('/signin'); // Navigate to the sign-in page
  };

  const handleSignUp = () => {
    navigate('/signup'); // Navigate to the sign-up page
  };

  return (
    <div className="landing-page">
      <div className="container">
       
        <h1 className="title">CAPACITI MANAGEMENT <br /> SYSTEM</h1>
        <div className="buttons">
          <button className="btn-signin" onClick={handleSignIn}>Sign In</button>
          <button className="btn-signup" onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
