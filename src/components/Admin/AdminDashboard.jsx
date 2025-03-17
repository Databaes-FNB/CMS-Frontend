// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./AdminDashboard.css";

// function AdminDashboard() {
//   const navigate = useNavigate();
  
//   // Sample data (you can replace this with actual dynamic data)
//   const [leaveRequests, setLeaveRequests] = useState([
//     { id: 1, internName: "John Doe", leaveDate: "2025-03-15", reason: "Medical", status: "Pending" },
//     { id: 2, internName: "Jane Smith", leaveDate: "2025-03-16", reason: "Personal", status: "Pending" },
//   ]);

//   const [users, setUsers] = useState([
//     { id: 1, username: "testuser", lastLogin: "2025-03-01", contractEnd: "2025-06-01", active: true },
//     { id: 2, username: "john_doe", lastLogin: "2025-02-25", contractEnd: "2025-05-30", active: true },
//     { id: 3, username: "jane_smith", lastLogin: "2025-02-15", contractEnd: "2025-06-15", active: true },
//   ]);

//   // Function to approve leave request
//   const approveLeave = (id) => {
//     setLeaveRequests(leaveRequests.map((request) => 
//       request.id === id ? { ...request, status: "Approved" } : request
//     ));
//     alert("Leave Approved!");
//   };

//   // Function to decline leave request with reason
//   const declineLeave = (id, reason) => {
//     setLeaveRequests(leaveRequests.map((request) => 
//       request.id === id ? { ...request, status: "Declined", reason: reason } : request
//     ));
//     alert("Leave Declined! Reason: " + reason);
//   };

//   // Function to handle removing an inactive user or expired contract user
//   const removeUser = (id) => {
//     setUsers(users.filter((user) => user.id !== id));
//     alert("User Removed!");
//   };

//   // Check for users who haven't logged in for 2 weeks or have expired contracts
//   useEffect(() => {
//     const currentDate = new Date();
//     const twoWeeksAgo = new Date(currentDate.setDate(currentDate.getDate() - 14));

//     setUsers(users.map(user => {
//       const lastLoginDate = new Date(user.lastLogin);
//       const contractEndDate = new Date(user.contractEnd);

//       // Set user as inactive if last login is more than 2 weeks ago or contract is expired
//       if (lastLoginDate < twoWeeksAgo || contractEndDate < currentDate) {
//         return { ...user, active: false };
//       }
//       return user;
//     }));
//   }, [users]);

//   return (
//     <div className="admin-dashboard">
//       <h1>Admin Dashboard</h1>

//       {/* Leave Requests Section */}
//       <div className="section">
//         <h2>Leave Requests</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Intern Name</th>
//               <th>Leave Date</th>
//               <th>Reason</th>
//               <th>Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leaveRequests.map((request) => (
//               <tr key={request.id}>
//                 <td>{request.internName}</td>
//                 <td>{request.leaveDate}</td>
//                 <td>{request.reason}</td>
//                 <td>{request.status}</td>
//                 <td>
//                   {request.status === "Pending" && (
//                     <>
//                       <button onClick={() => approveLeave(request.id)}>Approve</button>
//                       <button onClick={() => {
//                         const reason = prompt("Reason for declining:");
//                         if (reason) declineLeave(request.id, reason);
//                       }}>Decline</button>
//                     </>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Users Section */}
//       <div className="section">
//         <h2>Active Users</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Username</th>
//               <th>Last Login</th>
//               <th>Contract End</th>
//               <th>Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.id}>
//                 <td>{user.username}</td>
//                 <td>{user.lastLogin}</td>
//                 <td>{user.contractEnd}</td>
//                 <td>{user.active ? "Active" : "Inactive"}</td>
//                 <td>
//                   {!user.active && (
//                     <button onClick={() => removeUser(user.id)}>Remove User</button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;


import React from "react";
import AdminSidebar from "./AdminSidebar"; // Import the Sidebar
import "./AdminDashboard.css"; // Make sure to have the dashboard CSS

function AdminDashboard() {
  return (
    <div className="admin-dashboard-container">
      <AdminSidebar />
      <div className="admin-dashboard-content">
        <h1>Welcome to the Admin Dashboard</h1>
        <p>Manage intern leave requests, track active users, and more.</p>
        {/* You can add additional admin-specific components here */}
      </div>
    </div>
  );
}

export default AdminDashboard;
