/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MentorSidebar from "./MentorSidebar";  // Default import
import "./MentorDashboard.css";

function MentorDashboard() {
  const navigate = useNavigate();

  const [mentorInfo, setMentorInfo] = useState({
    fullName: "John Doe",
    cohort: "Cohort A",
    stream: "Frontend Development",
  });

  const [students, setStudents] = useState([
    { name: "Student One", progress: "50%" },
    { name: "Student Two", progress: "70%" },
  ]);

  const handleLogout = () => {
    alert("You have logged out successfully!");
    navigate("/"); // Redirect to the landing page
  };

  return (
    <div className="mentor-dashboard-container">
      <MentorSidebar handleLogout={handleLogout} /> {/* Pass handleLogout to Sidebar */}

      <div className="main-content">
        <header className="mentor-dashboard-header">
          <h1>Welcome, {mentorInfo.fullName}!</h1>
          <p>Cohort: {mentorInfo.cohort} | Stream: {mentorInfo.stream}</p>
        </header>

        <section className="students-section">
          <h2>Students in your Cohort</h2>
          <div className="students-list">
            {students.map((student, index) => (
              <div key={index} className="student-card">
                <h3>{student.name}</h3>
                <p>Progress: {student.progress}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default MentorDashboard;

