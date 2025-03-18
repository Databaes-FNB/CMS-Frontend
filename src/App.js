

// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LandingPage from './components/LandingPage';
// import LeaveApplication from './components/Interns/Leave';
// import EventCalendar from './components/Interns/EventCalendar';
// import Tasks from './components/Interns/Tasks';
// import Layout from './components/Layout';
// import LeaveRequests from './components/Admin/LeaveRequests';
// import InternPage from './components/Interns/InternPage';
// import ContractStatus from './components/Admin/ContractStatus';
// import ActiveUsers from './components/Admin/ActiveUsers';
// import SignUp from './components/SignUp';
// import SignIn from './components/SignIn';
// import InternScoreCard from './components/Interns/InternScorecard';
// import AdminDashboard from './components/Admin/AdminDashboard';
// import ForgotPassword from './components/ForgotPassword';

// function App() {
//   const [leaveRequests, setLeaveRequests] = useState([]); // Initialize leaveRequests as an empty array

//   // Function to add a leave request
//   const addLeaveRequest = (newLeaveRequest) => {
//     setLeaveRequests([...leaveRequests, newLeaveRequest]);
//   };

//   // Function to approve a leave request
//   const handleApprove = (id) => {
//     setLeaveRequests(
//       leaveRequests.map((request) =>
//         request.id === id ? { ...request, status: "Approved" } : request
//       )
//     );
//   };

//   // Function to decline a leave request
//   const handleDecline = (id, reason) => {
//     setLeaveRequests(
//       leaveRequests.map((request) =>
//         request.id === id
//           ? { ...request, status: "Declined", declineReason: reason }
//           : request
//       )
//     );
//   };

//   // Function to delete a leave request
//   const handleDelete = (id) => {
//     setLeaveRequests(leaveRequests.filter((request) => request.id !== id));
//   };


//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Route for Landing Page */}
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/InternPage" element={<InternPage />} />
//         <Route path="/forgotpassword"  element={<ForgotPassword/>}/>

//         {/* Layout Wrapper for Routes that require Sidebar */}
//         <Route element={<Layout />}>
//           {/* Intern Routes */}
//           <Route
//             path="/leave"
//             element={<LeaveApplication addLeaveRequest={addLeaveRequest} leaveRequests={leaveRequests} />}
//           />
//           <Route path="/event-calendar" element={<EventCalendar />} />
//           <Route path="/tasks" element={<Tasks />} />
//           <Route path="/scorecard" element={<InternScoreCard />} />

//           {/* Admin Routes */}
//           <Route
//             path="/admin/leave-requests"
//             element={
//               <LeaveRequests
//                 leaveRequests={leaveRequests}
//                 handleApprove={handleApprove}
//                 handleDecline={handleDecline}
//                 handleDelete={handleDelete}
      
//               />
//             }
//           />
//           <Route path="/admin/contract-status" element={<ContractStatus />} />
//           <Route path="/admin/users" element={<ActiveUsers />} />
//           <Route path="/admin/AdminDashboard" element={<AdminDashboard />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LandingPage from './components/LandingPage';
// import LeaveApplication from './components/Interns/Leave';
// import EventCalendar from './components/Interns/EventCalendar';
// import Tasks from './components/Interns/Tasks';
// import Layout from './components/Layout';
// import LeaveRequests from './components/Admin/LeaveRequests';
// import InternPage from './components/Interns/InternPage';
// import ContractStatus from './components/Admin/ContractStatus';
// import ActiveUsers from './components/Admin/ActiveUsers';
// import SignUp from './components/SignUp';
// import SignIn from './components/SignIn';
// import InternScoreCard from './components/Interns/InternScorecard';
// import AdminDashboard from './components/Admin/AdminDashboard';
// import ForgotPassword from './components/ForgotPassword';

// // Import Mentor components
// import MentorDashboard from './components/Mentor/MentorDashboard';
// import MentorTasks from './components/Mentor/MentorTasks';
// import MentorInterns from './components/Mentor/MentorInterns';
// import MentorReviews from './components/Mentor/MentorReviews';

// function App() {
//   const [leaveRequests, setLeaveRequests] = useState([]); // Initialize leaveRequests as an empty array

//   // Function to add a leave request
//   const addLeaveRequest = (newLeaveRequest) => {
//     setLeaveRequests([...leaveRequests, newLeaveRequest]);
//   };

//   // Function to approve a leave request
//   const handleApprove = (id) => {
//     setLeaveRequests(
//       leaveRequests.map((request) =>
//         request.id === id ? { ...request, status: "Approved" } : request
//       )
//     );
//   };

//   // Function to decline a leave request
//   const handleDecline = (id, reason) => {
//     setLeaveRequests(
//       leaveRequests.map((request) =>
//         request.id === id
//           ? { ...request, status: "Declined", declineReason: reason }
//           : request
//       )
//     );
//   };

//   // Function to delete a leave request
//   const handleDelete = (id) => {
//     setLeaveRequests(leaveRequests.filter((request) => request.id !== id));
//   };

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Route for Landing Page */}
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/InternPage" element={<InternPage />} />
//         <Route path="/forgotpassword" element={<ForgotPassword />} />

//         {/* Layout Wrapper for Routes that require Sidebar */}
//         <Route element={<Layout />}>
//           {/* Intern Routes */}
//           <Route
//             path="/leave"
//             element={<LeaveApplication addLeaveRequest={addLeaveRequest} leaveRequests={leaveRequests} />}
//           />
//           <Route path="/event-calendar" element={<EventCalendar />} />
//           <Route path="/tasks" element={<Tasks />} />
//           <Route path="/scorecard" element={<InternScoreCard />} />

//           {/* Admin Routes */}
//           <Route
//             path="/admin/leave-requests"
//             element={
//               <LeaveRequests
//                 leaveRequests={leaveRequests}
//                 handleApprove={handleApprove}
//                 handleDecline={handleDecline}
//                 handleDelete={handleDelete}
//               />
//             }
//           />
//           <Route path="/admin/contract-status" element={<ContractStatus />} />
//           <Route path="/admin/users" element={<ActiveUsers />} />
//           <Route path="/admin/AdminDashboard" element={<AdminDashboard />} />

//           {/* Mentor Routes */}
//           <Route path="/mentor/dashboard" element={<MentorDashboard />} />
//           <Route path="/mentor/tasks" element={<MentorTasks />} />
//           <Route path="/mentor/interns" element={<MentorInterns />} />
//           <Route path="/mentor/reviews" element={<MentorReviews />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



// In App.js

// App.js


import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LeaveApplication from './components/Interns/Leave';
import EventCalendar from './components/Interns/EventCalendar';
import Tasks from './components/Interns/Tasks';
import Layout from './components/Layout';
import LeaveRequests from './components/Admin/LeaveRequests';
import InternPage from './components/Interns/InternPage';
import ContractStatus from './components/Admin/ContractStatus';
import ActiveUsers from './components/Admin/ActiveUsers';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import InternScoreCard from './components/Interns/InternScorecard';
import AdminDashboard from './components/Admin/AdminDashboard';
import ForgotPassword from './components/ForgotPassword';
import MentorDashboard from './components/Mentor/MentorDashboard';
import MentorTasks from './components/Mentor/MentorTasks';
import MentorInterns from './components/Mentor/MentorInterns';
import MentorReviews from './components/Mentor/MentorReviews';

function App() {
  const [isMentor, setIsMentor] = useState(false); // State to track if the user is a mentor (false means admin or intern)

  return (
    <BrowserRouter>
      <Routes>
        {/* Route for Landing Page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn setIsMentor={setIsMentor} />} />
        <Route path="/InternPage" element={<InternPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />

        {/* Layout Wrapper for Routes that require Sidebar */}
        <Route element={<Layout />}>
          {/* Intern Routes */}
          <Route path="/leave" element={<LeaveApplication />} />
          <Route path="/event-calendar" element={<EventCalendar />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/scorecard" element={<InternScoreCard />} />

          {/* Admin Routes */}
          <Route path="/admin/leave-requests" element={<LeaveRequests />} />
          <Route path="/admin/contract-status" element={<ContractStatus />} />
          <Route path="/admin/users" element={<ActiveUsers />} />
          <Route path="/admin/AdminDashboard" element={<AdminDashboard />} />


          <Route path="/mentor/MentorDashboard" element={<MentorDashboard />} />
            <Route path="/mentor/tasks" element={<MentorTasks />} />
            <Route path="/mentor/interns" element={<MentorInterns />} />
            <Route path="/mentor/reviews" element={<MentorReviews />} />

        </Route>

       
        
           
         
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
