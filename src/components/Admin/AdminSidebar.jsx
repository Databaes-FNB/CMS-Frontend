

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
//           <Link to="/admin/leave-requests" className="sidebar-link leave-requests-link">Leave Requests</Link> 
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

//           <li>
//             <Link to="/" className="sidebar-link settings-link">Logout</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default AdminSidebar;


import React from "react";
import { Link } from "react-router-dom"; // Link to navigate without refreshing
import { FaTachometerAlt, FaClipboardList, FaUsers, FaFileContract, FaCog, FaSignOutAlt } from "react-icons/fa"; // Import icons
import "./AdminSidebar.css"; // Make sure to style it separately

function AdminSidebar() {
  return (
    <div className="admin-sidebar">
      <h2 className="admin-logo">Admin Panel</h2>
      <nav>
        <ul>
          <li>
            <Link to="/admin/AdminDashboard" className="sidebar-link dashboard-link">
              <FaTachometerAlt className="sidebar-icon" /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/leave-requests" className="sidebar-link leave-requests-link">
              <FaClipboardList className="sidebar-icon" /> Leave Requests
            </Link>
          </li>
          <li>
            <Link to="/admin/users" className="sidebar-link active-users-link">
              <FaUsers className="sidebar-icon" /> Active Users
            </Link>
          </li>
          <li>
            <Link to="/admin/contract-status" className="sidebar-link contract-status-link">
              <FaFileContract className="sidebar-icon" /> Contract Status
            </Link>
          </li>
          
          <li>
            <Link to="/" className="sidebar-link logout-link">
              <FaSignOutAlt className="sidebar-icon" /> Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AdminSidebar;
