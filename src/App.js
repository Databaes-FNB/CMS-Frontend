

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Intern from './components/InternPage';
import MentorDashboard from './components/MentorDashboard';

import LeaveApplication from './components/Leave';
import EventCalendar from './components/EventCalendar';
import Tasks from './components/Tasks';
import Scorecard from './components/Scorecard';
import Layout from './components/Layout';  // Import Layout

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* All routes that need sidebar are now inside the Layout */}
        <Route element={<Layout />}>
          <Route path="/intern" element={<Intern />} />
          <Route path="/mentor-dashboard" element={<MentorDashboard />} />
          <Route path="/leave" element={<LeaveApplication />} />
          <Route path="/event-calendar" element={<EventCalendar />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/scorecard" element={<Scorecard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
