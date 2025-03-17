// import React from "react";
// import { Link } from "react-router-dom"; // Link to navigate without refreshing
// import "./AdminSidebar.css"; // Make sure to style it separately

// function AdminSidebar() {
//   return (
//     <div className="admin-sidebar">
//       <h2 className="admin-logo">Admin Panel</h2>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/admin/dashboard">Dashboard</Link>
//           </li>
//           <li>
//             <Link to="/admin/leave-requests">Leave Requests</Link>
//           </li>
//           <li>
//             <Link to="/admin/users">Active Users</Link>
//           </li>
//           <li>
//             <Link to="/admin/contract-status">Contract Status</Link>
//           </li>
//           <li>
//             <Link to="/admin/settings">Settings</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default AdminSidebar;


// import React from "react";
// import { Link } from "react-router-dom"; // Link to navigate without refreshing
// import "./AdminSidebar.css"; // Make sure to style it separately

// function AdminSidebar() {
//   return (
//     <div className="admin-sidebar">
//       <h2 className="admin-logo">Admin Panel</h2>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/admin/dashboard" className="sidebar-link dashboard-link">Dashboard</Link>
//           </li>
//           <li>
//             <Link to="/admin/leave-requests" className="sidebar-link leave-requests-link">Leave Requests</Link>
//           </li>
//           <li>
//             <Link to="/admin/users" className="sidebar-link active-users-link">Active Users</Link>
//           </li>
//           <li>
//             <Link to="/admin/contract-status" className="sidebar-link contract-status-link">Contract Status</Link>
//           </li>
//           <li>
//             <Link to="/admin/settings" className="sidebar-link settings-link">Settings</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default AdminSidebar;


import React from "react";
import { Link } from "react-router-dom"; // Link to navigate without refreshing
import "./AdminSidebar.css"; // Make sure to style it separately

function AdminSidebar() {
  return (
    <div className="admin-sidebar">
      <h2 className="admin-logo">Admin Panel</h2>
      <nav>
        <ul>
          <li>
            <Link to="/admin/dashboard" className="sidebar-link dashboard-link">Dashboard</Link>
          </li>
          <li>
          <Link to="/admin/leave-requests" className="sidebar-link leave-requests-link">Leave Requests</Link> 
          </li>
          <li>
            <Link to="/admin/users" className="sidebar-link active-users-link">Active Users</Link>
          </li>
          <li>
            <Link to="/admin/contract-status" className="sidebar-link contract-status-link">Contract Status</Link>
          </li>
          <li>
            <Link to="/admin/settings" className="sidebar-link settings-link">Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AdminSidebar;
