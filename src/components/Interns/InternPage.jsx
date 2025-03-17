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


// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import './InternPage.css';

// function InternPage() {
//   const { state } = useLocation(); // Access passed data from location
//   const [time, setTime] = useState(new Date().toLocaleTimeString()); // State to store current time
//   const [isClockedIn, setIsClockedIn] = useState(false); // To track clock in/out status
  
//   const userName = state?.username || "User"; // Default to "User" if username not available

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, []);

//   const handleClockIn = () => {
//     setIsClockedIn(true);
//     alert("You have clocked in.");
//   };

//   const handleClockOut = () => {
//     setIsClockedIn(false);
//     alert("You have clocked out.");
//   };

//   return (
//     <div className="main-content">
//       <h1 className="welcome-message">Welcome, {userName}</h1>
//       <p className="time-display">
//         <strong>Time: </strong>{time}
//       </p>

//       {!isClockedIn && (
//         <p className="text">You are off the clock. Clock in.</p>
//       )}

//       <div className="clock-actions">
//         {!isClockedIn ? (
//           <button onClick={handleClockIn} className="clock-btn clock-in">
//             Clock In
//           </button>
//         ) : (
//           <button onClick={handleClockOut} className="clock-btn clock-out">
//             Clock Out
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default InternPage;


// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import './InternPage.css';

// function InternPage() {
//   const { state } = useLocation(); // Access passed data from location
//   const [time, setTime] = useState(new Date().toLocaleTimeString()); // State to store current time
//   const [isClockedIn, setIsClockedIn] = useState(false); // To track clock in/out status
//   const [clockInTime, setClockInTime] = useState(null); // To store clock-in time
//   const [workedHours, setWorkedHours] = useState(0); // To calculate total worked hours

//   const userName = state?.username || "User"; // Default to "User" if username not available

//   // Update the current time every second
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, []);

//   // Handle Clock In
//   const handleClockIn = () => {
//     if (isClockedIn) {
//       alert("You are already clocked in.");
//       return;
//     }

//     setIsClockedIn(true);
//     setClockInTime(new Date());
//     alert("You have clocked in.");
//   };

//   // Handle Clock Out
//   const handleClockOut = () => {
//     if (!isClockedIn) {
//       alert("You need to clock in first.");
//       return;
//     }

//     const clockOutTime = new Date();
//     const hoursWorked = (clockOutTime - clockInTime) / (1000 * 60 * 60); // Calculate hours worked
//     setWorkedHours(hoursWorked.toFixed(2)); // Set worked hours to state
//     setIsClockedIn(false);
//     alert(`You have clocked out. You worked for ${hoursWorked.toFixed(2)} hours.`);
//   };

//   return (
//     <div className="main-content">
//       <h1 className="welcome-message">Welcome, {userName}</h1>
//       <p className="time-display">
//         <strong>Time: </strong>{time}
//       </p>

//       {!isClockedIn && (
//         <p className="text">You are off the clock. Clock in.</p>
//       )}

//       {isClockedIn && (
//         <p className="text">You are clocked in. Ready to work!</p>
//       )}

//       <div className="clock-actions">
//         {!isClockedIn ? (
//           <button onClick={handleClockIn} className="clock-btn clock-in">
//             Clock In
//           </button>
//         ) : (
//           <button onClick={handleClockOut} className="clock-btn clock-out">
//             Clock Out
//           </button>
//         )}
//       </div>

//       {/* Display total worked hours */}
//       {workedHours > 0 && (
//         <p className="worked-hours">
//           <strong>Total Hours Worked: </strong>{workedHours} hours
//         </p>
//       )}
//     </div>
//   );
// }

// export default InternPage;


// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import './InternPage.css';

// function InternPage() {
//   const { state } = useLocation(); // Access passed data from location
//   const [time, setTime] = useState(new Date().toLocaleTimeString()); // State to store current time
//   const [isClockedIn, setIsClockedIn] = useState(false); // To track clock in/out status
//   const [clockInTime, setClockInTime] = useState(null); // To store clock-in time
//   const [workedTime, setWorkedTime] = useState(0); // To calculate total worked time in seconds

//   const userName = state?.username || "User"; // Default to "User" if username not available

//   // Check if the user was previously clocked in
//   useEffect(() => {
//     const savedClockInTime = localStorage.getItem('clockInTime');
//     const savedIsClockedIn = JSON.parse(localStorage.getItem('isClockedIn'));
//     const savedWorkedTime = parseFloat(localStorage.getItem('workedTime'));

//     if (savedIsClockedIn) {
//       setIsClockedIn(true);
//       setClockInTime(new Date(savedClockInTime));
//       setWorkedTime(savedWorkedTime); // Restore worked time
//     }

//     const interval = setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, []);

//   // Convert seconds to HH:MM:SS format
//   const formatTime = (seconds) => {
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
//     const secs = seconds % 60;

//     return `${hours > 0 ? hours + 'h ' : ''}${minutes > 0 ? minutes + 'm ' : ''}${secs}s`;
//   };

//   // Handle Clock In
//   const handleClockIn = () => {
//     if (isClockedIn) {
//       alert("You are already clocked in.");
//       return;
//     }

//     setIsClockedIn(true);
//     const currentClockInTime = new Date();
//     setClockInTime(currentClockInTime);
//     setWorkedTime(0); // Reset the worked time when clocking in

//     // Store clock-in state in localStorage
//     localStorage.setItem('clockInTime', currentClockInTime.toString());
//     localStorage.setItem('isClockedIn', JSON.stringify(true));

//     alert("You have clocked in.");
//   };

//   // Handle Clock Out
//   const handleClockOut = () => {
//     if (!isClockedIn) {
//       alert("You need to clock in first.");
//       return;
//     }

//     const clockOutTime = new Date();
//     const timeWorkedInSeconds = (clockOutTime - clockInTime) / 1000; // Time worked in seconds
//     setWorkedTime(timeWorkedInSeconds); // Update worked time state
//     setIsClockedIn(false);

//     // Store worked time and clock-out state in localStorage
//     localStorage.setItem('workedTime', timeWorkedInSeconds.toString());
//     localStorage.setItem('isClockedIn', JSON.stringify(false));

//     alert(`You have clocked out. You worked for ${formatTime(timeWorkedInSeconds)}.`);
//   };

//   return (
//     <div className="main-content">
//       <h1 className="welcome-message">Welcome, {userName}</h1>
//       <p className="time-display">
//         <strong>Time: </strong>{time}
//       </p>

//       {!isClockedIn && (
//         <p className="text">You are off the clock. Clock in.</p>
//       )}

//       {isClockedIn && (
//         <p className="text">You are clocked in. Ready to work!</p>
//       )}

//       <div className="clock-actions">
//         {!isClockedIn ? (
//           <button onClick={handleClockIn} className="clock-btn clock-in">
//             Clock In
//           </button>
//         ) : (
//           <button onClick={handleClockOut} className="clock-btn clock-out">
//             Clock Out
//           </button>
//         )}
//       </div>

//       {/* Display total worked time */}
//       {workedTime > 0 && (
//         <p className="worked-time">
//           <strong>Total Time Worked: </strong>{formatTime(workedTime)}
//         </p>
//       )}
//     </div>
//   );
// }

// export default InternPage;


// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import './InternPage.css';
// import Sidebar from "./Sidebar";


// function InternPage() {
//   const { state } = useLocation(); // Access passed data from location
//   const [time, setTime] = useState(new Date().toLocaleTimeString()); // State to store current time
//   const [isClockedIn, setIsClockedIn] = useState(false); // To track clock in/out status
//   const [clockInTime, setClockInTime] = useState(null); // To store clock-in time
//   const [workedTime, setWorkedTime] = useState(0); // To calculate total worked time in seconds

//   const userName = state?.username || "User"; // Default to "User" if username not available

//   // Check if the user was previously clocked in
//   useEffect(() => {
//     const savedClockInTime = localStorage.getItem('clockInTime');
//     const savedIsClockedIn = JSON.parse(localStorage.getItem('isClockedIn'));
//     const savedWorkedTime = parseFloat(localStorage.getItem('workedTime'));

//     if (savedIsClockedIn) {
//       setIsClockedIn(true);
//       setClockInTime(new Date(savedClockInTime));
//       setWorkedTime(savedWorkedTime); // Restore worked time
//     }

//     const interval = setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, []);

//   // Convert seconds to HH:MM:SS format
//   const formatTime = (seconds) => {
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
//     const secs = seconds % 60;

//     return `${hours > 0 ? hours + 'h ' : ''}${minutes > 0 ? minutes + 'm ' : ''}${secs}s`;
//   };

//   // Handle Clock In
//   const handleClockIn = () => {
//     if (isClockedIn) {
//       alert("You are already clocked in.");
//       return;
//     }

//     setIsClockedIn(true);
//     const currentClockInTime = new Date();
//     setClockInTime(currentClockInTime);
//     setWorkedTime(0); // Reset the worked time when clocking in

//     // Store clock-in state in localStorage
//     localStorage.setItem('clockInTime', currentClockInTime.toString());
//     localStorage.setItem('isClockedIn', JSON.stringify(true));

//     alert("You have clocked in.");
//   };

//   // Handle Clock Out
//   const handleClockOut = () => {
//     if (!isClockedIn) {
//       alert("You need to clock in first.");
//       return;
//     }

//     const clockOutTime = new Date();
//     const timeWorkedInSeconds = (clockOutTime - clockInTime) / 1000; // Time worked in seconds
//     setWorkedTime(timeWorkedInSeconds); // Update worked time state
//     setIsClockedIn(false);

//     // Store worked time and clock-out state in localStorage
//     localStorage.setItem('workedTime', timeWorkedInSeconds.toString());
//     localStorage.setItem('isClockedIn', JSON.stringify(false));

//     alert(`You have clocked out. You worked for ${formatTime(timeWorkedInSeconds)}.`);
//   };

//   return (

    
//     <div className="main-content">

//       <Sidebar/>
//       <h1 className="welcome-message">Welcome, {userName}</h1>
//       <p className="time-display">
//         <strong>Time: </strong>{time}
//       </p>

//       {!isClockedIn && (
//         <p className="text">You are off the clock. Clock in.</p>
//       )}

//       {isClockedIn && (
//         <p className="text">You are clocked in. Ready to work!</p>
//       )}

//       <div className="clock-actions">
//         {!isClockedIn ? (
//           <button onClick={handleClockIn} className="clock-btn clock-in">
//             Clock In
//           </button>
//         ) : (
//           <button onClick={handleClockOut} className="clock-btn clock-out">
//             Clock Out
//           </button>
//         )}
//       </div>

//       {/* Display total worked time */}
//       {workedTime > 0 && (
//         <p className="worked-time">
//           <strong>Total Time Worked: </strong>{formatTime(workedTime)}
//         </p>
//       )}
//     </div>
//   );
// }

// export default InternPage;





import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './InternPage.css';
import Sidebar from "./Sidebar";

function InternPage() {


  const { state } = useLocation(); // Access passed data from location
  const [time, setTime] = useState(new Date().toLocaleTimeString()); // State to store current time
  const [isClockedIn, setIsClockedIn] = useState(false); // To track clock in/out status
  const [clockInTime, setClockInTime] = useState(null); // To store clock-in time
  const [workedTime, setWorkedTime] = useState(0); // To calculate total worked time in seconds

  const userName = state?.username || "User"; // Default to "User" if username not available

  // Check if the user was previously clocked in
  useEffect(() => {
    const savedClockInTime = localStorage.getItem('clockInTime');
    const savedIsClockedIn = JSON.parse(localStorage.getItem('isClockedIn'));
    const savedWorkedTime = parseFloat(localStorage.getItem('workedTime'));

    if (savedIsClockedIn) {
      setIsClockedIn(true);
      setClockInTime(new Date(savedClockInTime));
      setWorkedTime(savedWorkedTime); // Restore worked time
    }

    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Convert seconds to HH:MM:SS format
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hours > 0 ? hours + 'h ' : ''}${minutes > 0 ? minutes + 'm ' : ''}${secs}s`;
  };

  // Handle Clock In
  const handleClockIn = () => {
    if (isClockedIn) {
      alert("You are already clocked in.");
      return;
    }

    setIsClockedIn(true);
    const currentClockInTime = new Date();
    setClockInTime(currentClockInTime);
    setWorkedTime(0); // Reset the worked time when clocking in

    // Store clock-in state in localStorage
    localStorage.setItem('clockInTime', currentClockInTime.toString());
    localStorage.setItem('isClockedIn', JSON.stringify(true));

    alert("You have clocked in.");
  };

  // Handle Clock Out
  const handleClockOut = () => {
    if (!isClockedIn) {
      alert("You need to clock in first.");
      return;
    }

    const clockOutTime = new Date();
    const timeWorkedInSeconds = (clockOutTime - clockInTime) / 1000; // Time worked in seconds
    setWorkedTime(timeWorkedInSeconds); // Update worked time state
    setIsClockedIn(false);

    // Store worked time and clock-out state in localStorage
    localStorage.setItem('workedTime', timeWorkedInSeconds.toString());
    localStorage.setItem('isClockedIn', JSON.stringify(false));

    alert(`You have clocked out. You worked for ${formatTime(timeWorkedInSeconds)}.`);
  };

  return (
    <div className="page-container">
  <Sidebar />  
      <div className="content">
        <h1 className="welcome-message">Welcome, {userName}</h1>
        <p className="time-display">
          <strong>Time: </strong>{time}
        </p>

        {!isClockedIn && (
          <p className="text">You are off the clock. Clock in.</p>
        )}

        {isClockedIn && (
          <p className="text">You are clocked in. Ready to work!</p>
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

        {/* Display total worked time */}
        {workedTime > 0 && (
          <p className="worked-time">
            <strong>Total Time Worked: </strong>{formatTime(workedTime)}
          </p>
        )}
      </div>
    </div>
  );
}

export default InternPage;



















// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom"; // Access passed data from location
// import './InternPage.css';

// function InternPage() {
//   const { state } = useLocation(); // Access passed data from location
//   const [time, setTime] = useState(new Date().toLocaleTimeString()); // State to store current time
//   const [isClockedIn, setIsClockedIn] = useState(false); // To track clock in/out status
//   const [clockInTime, setClockInTime] = useState(null); // To store clock-in time
//   const [workedTime, setWorkedTime] = useState(0); // To calculate total worked time in seconds

//   const userName = state?.username || "User"; // Default to "User" if username not available
//   const cohort = state?.cohort || "Not Assigned"; // Default if cohort is not available
//   const stream = state?.stream || "Not Assigned"; // Default if stream is not available

//   // Check if the user was previously clocked in
//   useEffect(() => {
//     const savedClockInTime = localStorage.getItem('clockInTime');
//     const savedIsClockedIn = JSON.parse(localStorage.getItem('isClockedIn'));
//     const savedWorkedTime = parseFloat(localStorage.getItem('workedTime'));

//     if (savedIsClockedIn) {
//       setIsClockedIn(true);
//       setClockInTime(new Date(savedClockInTime));
//       setWorkedTime(savedWorkedTime); // Restore worked time
//     }

//     const interval = setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, []);

//   // Convert seconds to HH:MM:SS format
//   const formatTime = (seconds) => {
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
//     const secs = seconds % 60;

//     return `${hours > 0 ? hours + 'h ' : ''}${minutes > 0 ? minutes + 'm ' : ''}${secs}s`;
//   };

//   // Handle Clock In
//   const handleClockIn = () => {
//     if (isClockedIn) {
//       alert("You are already clocked in.");
//       return;
//     }

//     setIsClockedIn(true);
//     const currentClockInTime = new Date();
//     setClockInTime(currentClockInTime);
//     setWorkedTime(0); // Reset the worked time when clocking in

//     // Store clock-in state in localStorage
//     localStorage.setItem('clockInTime', currentClockInTime.toString());
//     localStorage.setItem('isClockedIn', JSON.stringify(true));

//     alert("You have clocked in.");
//   };

//   // Handle Clock Out
//   const handleClockOut = () => {
//     if (!isClockedIn) {
//       alert("You need to clock in first.");
//       return;
//     }

//     const clockOutTime = new Date();
//     const timeWorkedInSeconds = (clockOutTime - clockInTime) / 1000; // Time worked in seconds
//     setWorkedTime(timeWorkedInSeconds); // Update worked time state
//     setIsClockedIn(false);

//     // Store worked time and clock-out state in localStorage
//     localStorage.setItem('workedTime', timeWorkedInSeconds.toString());
//     localStorage.setItem('isClockedIn', JSON.stringify(false));

//     alert(`You have clocked out. You worked for ${formatTime(timeWorkedInSeconds)}.`);
//   };

//   return (
//     <div className="main-content">
//       <h1 className="welcome-message">Welcome, {userName}!</h1>
//       <p className="cohort-info">Cohort: {cohort}</p>
//       <p className="stream-info">Stream: {stream}</p>
//       <p className="time-display">
//         <strong>Time: </strong>{time}
//       </p>

//       {!isClockedIn && (
//         <p className="text">You are off the clock. Clock in.</p>
//       )}

//       {isClockedIn && (
//         <p className="text">You are clocked in. Ready to work!</p>
//       )}

//       <div className="clock-actions">
//         {!isClockedIn ? (
//           <button onClick={handleClockIn} className="clock-btn clock-in">
//             Clock In
//           </button>
//         ) : (
//           <button onClick={handleClockOut} className="clock-btn clock-out">
//             Clock Out
//           </button>
//         )}
//       </div>

//       {/* Display total worked time */}
//       {workedTime > 0 && (
//         <p className="worked-time">
//           <strong>Total Time Worked: </strong>{formatTime(workedTime)}
//         </p>
//       )}
//     </div>
//   );
// }

// export default InternPage;
