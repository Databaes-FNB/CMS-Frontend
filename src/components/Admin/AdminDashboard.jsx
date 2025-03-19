

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
