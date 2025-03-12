// import React, { useState, useEffect } from "react";
// import { useLocation, Link } from "react-router-dom"; // To access passed state and link navigation
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
// import { faClock, faSignOutAlt, faCalendar, faTasks, faTrophy, faUserAlt } from '@fortawesome/free-solid-svg-icons'; // Import specific icons
// import "./InternPage.css";

// function InternPage() {
//   const { state } = useLocation(); // Access passed data from location
//   const [time, setTime] = useState(new Date().toLocaleTimeString()); // State to store current time
//   const [isClockedIn, setIsClockedIn] = useState(false); // To track clock in/out status
  
//   // Retrieve username from location state
//   const userName = state?.username || "User"; // Default to "User" if username not available

//   // Update time every second
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, []);

//   // Handle Clock In and Clock Out
//   const handleClockIn = () => {
//     setIsClockedIn(true);
//     alert("You have clocked in.");
//   };

//   const handleClockOut = () => {
//     setIsClockedIn(false);
//     alert("You have clocked out.");
//   };

//   return (
//     <div className="intern-container">
//       {/* Sidebar */}
//       <div className="sidebar">
//         <h2>Intern Dashboard</h2>
//         <nav>
//           <ul>
//             <li className="active">
//               <Link to="">
//                 <FontAwesomeIcon icon={faClock} className="nav-icon" /> Clock-In
//               </Link>
//             </li>
//             <li>
//               <Link to="/ScoreCard">
//                 <FontAwesomeIcon icon={faTrophy} className="nav-icon" /> Score Card
//               </Link>
//             </li>
//             <li>
//               <Link to="/Tasks">
//                 <FontAwesomeIcon icon={faTasks} className="nav-icon" /> Assessments
//               </Link>
//             </li>
//             <li>
//               <Link to="/leave">
//               <FontAwesomeIcon icon={faCalendarAlt} className="nav-icon" /> Leave Application
//               </Link>
//             </li>
//             <li>
//               <Link to="/EventCalendar">
//                 <FontAwesomeIcon icon={faCalendar} className="nav-icon" /> Event Calendar
//               </Link>
//             </li>
//             <li>
//               <Link to="/">
//                 <FontAwesomeIcon icon={faSignOutAlt} className="nav-icon" /> Logout
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="main-content">
//         <h1 className="welcome-message">Welcome, {userName}</h1>

//         {/* Display current time */}
//         <p className="time-display">
//           <strong>Time: </strong>{time}
//         </p>

//         {/* Display off clock message when not clocked in */}
//         {!isClockedIn && (
//           <p className="text">You are off the clock. Clock in.</p>
//         )}

//         {/* Clock In/Out buttons */}
//         <div className="clock-actions">
//           {!isClockedIn ? (
//             <button onClick={handleClockIn} className="clock-btn clock-in">
//               Clock In
//             </button>
//           ) : (
//             <button onClick={handleClockOut} className="clock-btn clock-out">
//               Clock Out
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default InternPage;


import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './InternPage.css';

function InternPage() {
  const { state } = useLocation(); // Access passed data from location
  const [time, setTime] = useState(new Date().toLocaleTimeString()); // State to store current time
  const [isClockedIn, setIsClockedIn] = useState(false); // To track clock in/out status
  
  const userName = state?.username || "User"; // Default to "User" if username not available

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const handleClockIn = () => {
    setIsClockedIn(true);
    alert("You have clocked in.");
  };

  const handleClockOut = () => {
    setIsClockedIn(false);
    alert("You have clocked out.");
  };

  return (
    <div className="main-content">
      <h1 className="welcome-message">Welcome, {userName}</h1>
      <p className="time-display">
        <strong>Time: </strong>{time}
      </p>

      {!isClockedIn && (
        <p className="text">You are off the clock. Clock in.</p>
      )}

      <div className="clock-actions">
        {!isClockedIn ? (
          <button onClick={handleClockIn} className="clock-btn clock-in">
            Clock In
          </button>
        ) : (
          <button onClick={handleClockOut} className="clock-btn clock-out">
            Clock Out
          </button>
        )}
      </div>
    </div>
  );
}

export default InternPage;
