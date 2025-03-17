// LeaveRequests.js
import React, { useState } from "react";
import "./LeaveRequests.css";

function LeaveRequests() {
  const [leaveRequests, setLeaveRequests] = useState([
    { id: 1, username: "John Doe", reason: "Sick", status: "Pending" },
    { id: 2, username: "Jane Smith", reason: "Personal", status: "Approved" },
  ]);

  const handleApprove = (id) => {
    setLeaveRequests(
      leaveRequests.map((request) =>
        request.id === id ? { ...request, status: "Approved" } : request
      )
    );
  };

  const handleDecline = (id) => {
    setLeaveRequests(
      leaveRequests.map((request) =>
        request.id === id ? { ...request, status: "Declined" } : request
      )
    );
  };

  return (
    <div className="leave-requests-container">
      <h2>Leave Requests</h2>
      <table className="leave-requests-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaveRequests.map((request) => (
            <tr key={request.id}>
              <td>{request.username}</td>
              <td>{request.reason}</td>
              <td>{request.status}</td>
              <td>
                {request.status === "Pending" && (
                  <>
                    <button onClick={() => handleApprove(request.id)}>Approve</button>
                    <button onClick={() => handleDecline(request.id)}>Decline</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaveRequests;
