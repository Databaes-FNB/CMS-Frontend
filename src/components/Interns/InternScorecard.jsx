import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import './InternScorecard.css';

function InternScorecard() {
  const [scores, setScores] = useState({});
  const [internName, setInternName] = useState('');

  useEffect(() => {
    // Retrieve the scores and intern name from localStorage (or backend)
    const savedName = localStorage.getItem('internName');
    const savedScores = JSON.parse(localStorage.getItem('scores'));
    
    setInternName(savedName);
    setScores(savedScores);
  }, []);

  const getRoundedPoints = (score) => {
    return Math.round(score / 5) * 5;
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
      <h1>Intern Scorecard</h1>
      <div className="scorecard">
        <p><strong>Intern Name: </strong>{internName}</p>
        <p><strong>Communication: </strong>{scores.communication}%</p>
        <p><strong>Accountability: </strong>{scores.accountability}%</p>
        <p><strong>Attendance: </strong>{scores.attendance}%</p>
        <p><strong>Project Delivery: </strong>{scores.projectDelivery}%</p>
        <p><strong>Technical: </strong>{scores.technical}%</p>
        <p><strong>Total Score: </strong>{(Object.values(scores).reduce((acc, curr) => acc + curr, 0) / Object.keys(scores).length).toFixed(2)}%</p>
        
        <button onClick={handleDownload}>Download Scorecard</button>
      </div>
    </div>
  );
}

export default InternScorecard;
