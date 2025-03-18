import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import Sidebar from "./Sidebar"; 
import './InternScorecard.css';

function InternScorecard() {
  const [scores, setScores] = useState({
    communication: 85,
    accountability: 90,
    attendance: 95,
    projectDelivery: 88,
    technical: 92,
  });
  const [internName, setInternName] = useState('John Doe');

  const getRoundedPoints = (score) => {
    return Math.round(score / 5) * 5; // Rounds to the nearest 5
  };

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text(`Scorecard for ${internName}`, 20, 10);
    doc.text(`Communication: ${scores.communication}%`, 20, 20);
    doc.text(`Accountability: ${scores.accountability}%`, 20, 30);
    doc.text(`Attendance: ${scores.attendance}%`, 20, 40);
    doc.text(`Project Delivery: ${scores.projectDelivery}%`, 20, 50);
    doc.text(`Technical: ${scores.technical}%`, 20, 60);

    const totalScore = Object.values(scores).reduce((acc, curr) => acc + curr, 0);
    const totalPercentage = totalScore / Object.keys(scores).length;
    doc.text(`Overall Percentage: ${totalPercentage.toFixed(2)}%`, 20, 70);
    doc.text(`Overall Points: ${getRoundedPoints(totalPercentage)} / 100`, 20, 80);

    doc.save('scorecard.pdf');
  };

  return (
    <div className="intern-scorecard-container">
      {/* Sidebar is placed on the left */}
      <Sidebar />  

      <h1 className='header'>Intern Scorecard</h1>

      <div className="scorecard-table">
        <div className="table-header">
          <div className="cell">Metric</div>
          <div className="cell">Score</div>
        </div>
        <div className="table-row">
          <div className="cell">Communication</div>
          <div className="cell">{scores.communication}%</div>
        </div>
        <div className="table-row">
          <div className="cell">Accountability</div>
          <div className="cell">{scores.accountability}%</div>
        </div>
        <div className="table-row">
          <div className="cell">Attendance</div>
          <div className="cell">{scores.attendance}%</div>
        </div>
        <div className="table-row">
          <div className="cell">Project Delivery</div>
          <div className="cell">{scores.projectDelivery}%</div>
        </div>
        <div className="table-row">
          <div className="cell">Technical</div>
          <div className="cell">{scores.technical}%</div>
        </div>
        <div className="table-footer">
          <div className="cell"><strong>Total Score:</strong></div>
          <div className="cell">
            {(Object.values(scores).reduce((acc, curr) => acc + curr, 0) / Object.keys(scores).length).toFixed(2)}%
          </div>
        </div>
      </div>

      <button onClick={handleDownload} className="download-btn">Download Scorecard</button>
    </div>
  );
}

export default InternScorecard;
