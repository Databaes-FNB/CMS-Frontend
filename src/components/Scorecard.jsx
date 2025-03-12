import React, { useState, useEffect } from 'react';
import './ScoreCard.css';

function Scorecard() {
  // Sample scores for each category (you can replace these with actual dynamic data)
  const [scores, setScores] = useState({
    communication: 92,
    accountability: 85,
    attendance: 98,
    projectDelivery: 77,
    technical: 89,
  });

  const getRoundedPoints = (score) => {
    // Round score to the nearest multiple of 5
    return Math.round(score / 5) * 5;
  };

  // Calculate percentages for each category (assuming scores are out of 100)
  const categories = [
    { name: 'Communication', score: scores.communication },
    { name: 'Accountability', score: scores.accountability },
    { name: 'Attendance', score: scores.attendance },
    { name: 'Project Delivery', score: scores.projectDelivery },
    { name: 'Technical', score: scores.technical },
  ];

  // Calculate total percentage and rounded points
  const totalScore = Object.values(scores).reduce((acc, curr) => acc + curr, 0);
  const totalPercentage = totalScore / categories.length;

  return (
    <div className="scorecard-container">
      <h1>Student Scorecard</h1>
      <div className="scorecard">
        {categories.map((category, index) => (
          <div key={index} className="scorecard-category">
            <h2>{category.name}</h2>
            <p>Percentage: {category.score}%</p>
            <p>Points: {getRoundedPoints(category.score)} / 100</p>
          </div>
        ))}
        <div className="total-score">
          <h2>Total Score</h2>
          <p>Overall Percentage: {totalPercentage.toFixed(2)}%</p>
          <p>Overall Points: {getRoundedPoints(totalPercentage)} / 100</p>
        </div>
      </div>
    </div>
  );
}

export default Scorecard;
