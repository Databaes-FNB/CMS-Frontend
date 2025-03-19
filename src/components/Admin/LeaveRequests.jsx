import React from "react";
import "./LeaveRequests.css";
import AdminSidebar from "./AdminSidebar"; // Import the Sidebar

function LeaveRequests({ leaveRequests = [], handleApprove, handleDecline }) {
  console.log('Leave requests:', leaveRequests);

  return (
    <div className="leave-requests-container">
         <AdminSidebar />
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
          {leaveRequests.length === 0 ? (
            <tr>
              <td colSpan="4">No leave requests available.</td>
            </tr>
          ) : (
            leaveRequests.map((request) => (
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
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default LeaveRequests;
