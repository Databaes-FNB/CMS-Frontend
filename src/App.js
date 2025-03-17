import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LeaveApplication from './components/Interns/Leave';
import EventCalendar from './components/Interns/EventCalendar';
import Tasks from './components/Interns/Tasks';
import InternScoredcard from './components/Interns/InternScorecard';
import Layout from './components/Layout';  // Import Layout
import AdminDashboard from './components/Admin/AdminDashboard';
import LeaveRequests from './components/Admin/LeaveRequests';
import InternPage from './components/Interns/InternPage';
// import AdminSidebar from './components/Admin/AdminSidebar';
import ContractStatus from './components/Admin/ContractStatus';
import ActiveUsers from './components/Admin/ActiveUsers';
import Settings from './components/Admin/Settings';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for Landing Page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp/>}/>
    <Route path="/signin" element={<SignIn/>}/>
        <Route path="/InternPage" element={<InternPage />} />
        {/* Layout Wrapper for Routes that require Sidebar */}
        <Route element={<Layout />}>
          {/* Intern Routes */}
      
          <Route path="/InternPage" element={<InternPage />} />
          <Route path="/leave" element={<LeaveApplication />} />
          <Route path="/event-calendar" element={<EventCalendar />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/InternScorecard" element={<InternScoredcard />} />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/leave-requests" element={<LeaveRequests />} />
          <Route path="/admin/contract-status" element={<ContractStatus />} />
          <Route path="/admin/users" element={<ActiveUsers />} />
          <Route path="/admin/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './components/Layout';
// import InternPage from './components/Interns/InternPage';
// import AdminDashboard from './components/Admin/AdminDashboard';
// import MentorDashboard from './components/Mentor/MentorDashboard';
// import SignUp from './components/SignUp';
// import SignIn from './components/SignIn';

// function App() {
//   const [userRole, setUserRole] = useState(null);

//   // UseEffect to get the role from localStorage when the app loads
//   useEffect(() => {
//     const storedRole = localStorage.getItem('userRole'); // Get the role from localStorage or any other mechanism
//     setUserRole(storedRole); // Set role dynamically
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/LandingPage" element={<SignIn setUserRole={setUserRole} />} />
//         <Route path="/signup" element={<SignUp />} />

//         {/* Layout with dynamic userRole passed */}
//         <Route path="/" element={<Layout userRole={userRole} />}>
//           {/* Nested Routes */}
//           <Route path="/intern" element={<InternPage />} />
//           <Route path="/admin/dashboard" element={<AdminDashboard />} />
//           <Route path="/mentor/dashboard" element={<MentorDashboard />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;

