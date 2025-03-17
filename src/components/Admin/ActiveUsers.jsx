// ActiveUsers.js
import React, { useState } from "react";
import "./ActiveUsers.css";

function ActiveUsers() {
  const [users, setUsers] = useState([
    { id: 1, username: "John Doe", lastLogin: "2025-03-10", status: "Active" },
    { id: 2, username: "Jane Smith", lastLogin: "2025-02-20", status: "Inactive" },
  ]);

  const handleDeactivate = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, status: "Inactive" } : user
      )
    );
  };

  return (
    <div className="active-users-container">
      <h2>Active Users</h2>
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
                {user.status === "Active" && (
                  <button onClick={() => handleDeactivate(user.id)}>
                    Deactivate
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
