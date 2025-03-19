import React, { useState } from 'react';
import './Leave.css';
import Sidebar from "./Sidebar";

function Leave({ addLeaveRequest }) {
  const [name, setName] = useState('');
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [leaveStatus, setLeaveStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setLeaveStatus('Pending');

    const newLeaveRequest = {
      id: Date.now(),
      username: name,
      reason: leaveType,
      startDate,
      endDate,
      returnDate,
      status: 'Pending',
    };

    if (addLeaveRequest && typeof addLeaveRequest === 'function') {
      addLeaveRequest(newLeaveRequest);
    } else {
      console.error('addLeaveRequest is not a function');
    }

    alert(`Leave Application Submitted:
      Name: ${name}
      Type of Leave: ${leaveType}
      Start Date: ${startDate}
      End Date: ${endDate}
      Date Back in Office: ${returnDate}`);
  };

  return (
    <div className="leave-container">
         <Sidebar />  
      <div className="leave-form-container">
        <form onSubmit={handleSubmit}>
          <h2>Leave Application Form</h2>
          <div>
            <input
              type="text"
              className="leave-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>

          <table>
            <thead>
              <tr>
                <th>Leave Type</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Date Back in Office</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <select
                    value={leaveType}
                    onChange={(e) => setLeaveType(e.target.value)}
                    required
                  >
                    <option value="">Select Leave Type</option>
                    <option value="Annual Leave">Annual Leave</option>
                    <option value="Family Responsibility Leave">Family Responsibility Leave</option>
                    <option value="Sick Leave">Sick Leave</option>
                    <option value="Compassionate Leave">Compassionate Leave</option>
                    <option value="Accrued / Other Leave">Accrued / Other Leave</option>
                  </select>
                </td>
                <td>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                  />
                </td>
                <td>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required
                  />
                </td>
                <td>
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="submit-btn">
            <button type="submit">Submit</button>
          </div>

          {leaveStatus && (
            <div className="status-message">
              <strong>Leave Status:</strong> {leaveStatus}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Leave;
