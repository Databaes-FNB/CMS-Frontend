

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faTrophy, faTasks, faCalendarAlt, faCalendar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
            <img src="/logo.png" alt="Logo" className="logo2" />

      <nav>
        <ul>
          <li>
            <Link to="/InternPage">
              <FontAwesomeIcon icon={faClock} className="nav-icon" /> Clock-In
            </Link>
          </li>
          <li>
            <Link to="/scorecard">
              <FontAwesomeIcon icon={faTrophy} className="nav-icon" /> Score Card
            </Link>
          </li>
          <li>
            <Link to="/tasks">
              <FontAwesomeIcon icon={faTasks} className="nav-icon" /> Assessments
            </Link>
          </li>
          <li>
            <Link to="/leave">
              <FontAwesomeIcon icon={faCalendarAlt} className="nav-icon" /> Leave Application
            </Link>
          </li>
          <li>
            <Link to="/event-calendar">
              <FontAwesomeIcon icon={faCalendar} className="nav-icon" /> Event Calendar
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faSignOutAlt} className="nav-icon" /> Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
