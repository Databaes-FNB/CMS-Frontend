import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './MentorPage.css';  // New CSS file for mentor-specific styles

function MentorPage() {
  const { state } = useLocation(); // Access passed data from location
  const [time, setTime] = useState(new Date().toLocaleTimeString()); // State to store current time
  const [isAvailable, setIsAvailable] = useState(false); // To track availability status
  
  const userName = state?.username || "Mentor"; // Default to "Mentor" if username not available

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const handleAvailability = () => {
    setIsAvailable(!isAvailable);
    alert(isAvailable ? "You are now unavailable." : "You are now available.");
  };

  return (
    <div className="main-content">
      <h1 className="welcome-message">Welcome, {userName}</h1>
      <p className="time-display">
        <strong>Time: </strong>{time}
      </p>

      <p className="status-text">
        {isAvailable ? "You are available to mentor." : "You are currently unavailable."}
      </p>

      <div className="availability-actions">
        <button onClick={handleAvailability} className={`availability-btn ${isAvailable ? "available" : "unavailable"}`}>
          {isAvailable ? "Set Unavailable" : "Set Available"}
        </button>
      </div>
    </div>
  );
}

export default MentorPage;
