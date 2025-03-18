// components/Mentor/MentorSidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './MentorSidebar.css'; // Optional: To apply custom styling for the sidebar

function MentorSidebar() {
  return (
    <div className="mentor-sidebar">
      <div className="sidebar-header">
        <h2>Mentor Dashboard</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/mentor/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/mentor/tasks">Tasks</Link>
          </li>
          <li>
            <Link to="/mentor/interns">Interns</Link>
          </li>
          <li>
            <Link to="/mentor/reviews">Reviews</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MentorSidebar;
