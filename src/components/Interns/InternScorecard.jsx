import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar'; 
import './InternScorecard.css';

function InternScorecard() {
  const [scores, setScores] = useState({
    communication: 0, // Out of 5
    accountability: 0, // Out of 5
    attendance: 0, // Out of 5
    projectDelivery: 0, // Out of 5
    technical: 0, // Out of 5
  });
  const [internName, setInternName] = useState('');

  useEffect(() => {
    // Retrieve score data from localStorage
    const storedInternName = localStorage.getItem('internName');
    const storedScores = JSON.parse(localStorage.getItem('scores'));

    if (storedInternName && storedScores) {
      setInternName(storedInternName);
      setScores(storedScores);
    }
  }, []);

  // Calculate total percentage from scores (out of 5 each)
  const getTotalPercentage = () => {
    const totalPossibleScore = 5 * 5; // 5 metrics, each out of 5 = 25
    const totalScore = (
      scores.communication +
      scores.accountability +
      scores.attendance +
      scores.projectDelivery +
      scores.technical
    );

    // Calculate the percentage out of 100
    const percentage = (totalScore / totalPossibleScore) * 100;

    // Return percentage, rounded to 2 decimal places unless it is exactly 100
    if (percentage == 100) {
      return 100;
    }
 return getTotalPercentage;
    
  };

  return (
    <div className="intern-scorecard-container">
      <Sidebar />  

      <h1 className='header'>Scorecard for {internName}</h1>

      <div className="scorecard-table">
        <div className="table-header">
          <div className="cell">Metric</div>
          <div className="cell">Score</div>
        </div>
        <div className="table-row">
          <div className="cell">Communication (Out of 5)</div>
          <div className="cell">{scores.communication}</div>
        </div>
        <div className="table-row">
          <div className="cell">Accountability (Out of 5)</div>
          <div className="cell">{scores.accountability}</div>
        </div>
        <div className="table-row">
          <div className="cell">Attendance (Out of 5)</div>
          <div className="cell">{scores.attendance}</div>
        </div>
        <div className="table-row">
          <div className="cell">Project Delivery (Out of 5)</div>
          <div className="cell">{scores.projectDelivery} </div>
        </div>
        <div className="table-row">
          <div className="cell">Technical (Out of 5)</div>
          <div className="cell">{scores.technical}</div>
        </div>
        <div className="table-footer">
          {/* <div className="cell"><strong>Total Score:</strong></div> */}
          <div className="cell">
            {getTotalPercentage()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternScorecard;
