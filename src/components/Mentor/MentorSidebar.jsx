import React from "react";
import { Link } from "react-router-dom"; // Link to navigate without refreshing
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faTasks, faCalendarAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons"; // Icons for Mentor sidebar
import "./MentorSidebar.css"; // Separate styling for Mentor Sidebar

const MentorSidebar = () => {
  return (
    <div className="mentor-sidebar">
      <h2 className="mentor-logo">Mentor Panel</h2>
      <nav>
        <ul>
          <li>
            <Link to="/mentor/dashboard" className="sidebar-link dashboard-link">Dashboard</Link>
          </li>
          <li>
            <Link to="/mentor/assessments" className="sidebar-link assessments-link">Assessments</Link>
          </li>
          <li>
            <Link to="/mentor/leave-requests" className="sidebar-link leave-requests-link">Leave Requests</Link>
          </li>
          <li>
            <Link to="/mentor/events" className="sidebar-link events-link">Events</Link>
          </li>
          <li>
            <Link to="/" className="sidebar-link logout-link">
              <FontAwesomeIcon icon={faSignOutAlt} className="nav-icon" /> Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MentorSidebar;
