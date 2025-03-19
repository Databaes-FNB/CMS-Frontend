import React, { useState, useEffect } from "react";
import "./ActiveUsers.css";
import AdminSidebar from "./AdminSidebar"; // Import the Sidebar

function ActiveUsers() {
  // Hardcoded users data
  const [users, setUsers] = useState([
    { id: 1, username: "desree.madiba@gmail.com", lastLogin: "2025-03-16", status: "Active" },
    { id: 2, username: "Leeson.Govender@gmail.com", lastLogin: "2024-12-15", status: "Inactive" },
    { id: 3, username: "Nkosinathi.Sibiya@gmail.com", lastLogin: "2025-03-14", status: "Active" },
    { id: 4, username: "Mduduzi.Nyathi@gmail.com", lastLogin: "2024-12-13", status: "Inactive" },
  ]);

  // Deactivate a user
  const handleDeactivate = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, status: "Inactive" } : user
      )
    );
  };

  // Activate a user
  const handleActivate = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, status: "Active" } : user
      )
    );
  };

  return (
    <div className="active-users-container">
        <AdminSidebar />
      <h2>Users</h2>
      <table className="active-users-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Last Login</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.lastLogin}</td>
              <td>{user.status}</td>
              <td>
                {user.status === "Active" ? (
                  <button onClick={() => handleDeactivate(user.id)}>
                    Deactivate
                  </button>
                ) : (
                  <button onClick={() => handleActivate(user.id)}>
                    Activate
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ActiveUsers;
