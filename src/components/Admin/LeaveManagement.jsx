import React, { useState } from 'react';
import Leave from './../Interns/Leave';
import LeaveRequests from './LeaveRequests';

function LeaveManagement() {
  const [leaveRequests, setLeaveRequests] = useState([]);

  const addLeaveRequest = (newLeaveRequest) => {
    console.log('Adding leave request:', newLeaveRequest);
    setLeaveRequests((prevRequests) => [...prevRequests, newLeaveRequest]);
  };

  const handleApprove = (id) => {
    console.log('Approving request with id:', id);
    setLeaveRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status: 'Approved' } : request
      )
    );
  };

  const handleDecline = (id) => {
    console.log('Declining request with id:', id);
    setLeaveRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status: 'Declined' } : request
      )
    );
  };

  return (
    <div>
      <Leave addLeaveRequest={addLeaveRequest} />
      <LeaveRequests
        leaveRequests={leaveRequests}
        handleApprove={handleApprove}
        handleDecline={handleDecline}
      />
    </div>
  );
}

export default LeaveManagement;
