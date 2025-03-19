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

  // Convert seconds to HH:MM:SS format with rounded seconds
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    // Round the seconds to two decimal places
    const roundedSecs = Math.round(secs * 100) / 100; // rounds to 2 decimal places

    return `${hours > 0 ? hours + 'h ' : ''}${minutes > 0 ? minutes + 'm ' : ''}${roundedSecs}s`;
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
