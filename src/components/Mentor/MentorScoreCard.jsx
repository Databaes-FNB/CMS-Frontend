import React, { useState } from 'react';
import './MentorScoreCard.css';
import MentorSidebar from './MentorSidebar';

function MentorScorecard() {
  const [scores, setScores] = useState({
    communication: 0,
    accountability: 0,
    attendance: 0,
    projectDelivery: 0,
    technical: 0,
  });

  const [internName, setInternName] = useState('');

  const handleInputChange = (e) => {
    setScores({
      ...scores,
      [e.target.name]: e.target.value,
    });
  };

  const handleNameChange = (e) => {
    setInternName(e.target.value);
  };

  const handleSubmit = () => {
    // Save scores and intern name to localStorage
    localStorage.setItem('internName', internName);
    localStorage.setItem('scores', JSON.stringify(scores));

    alert('Scores saved and sent to intern side!');
  };

  return (
    <div className="mentor-scorecard-container">
      <MentorSidebar />
      <h1>Enter Scores for Intern</h1>
      <form>
        <div>
          <label>Intern Name: </label>
          <input
            type="text"
            name="internName"
            value={internName}
            onChange={handleNameChange}
            placeholder="Enter intern name"
            className="mentor-input"
          />
        </div>

        <div>
          <label>Communication (Out of 5): </label>
          <input
            type="number"
            name="communication"
            value={scores.communication}
            onChange={handleInputChange}
            placeholder="Enter score"
            max="5"
            min="0"
            className="mentor-input"
          />
        </div>

        <div>
          <label>Accountability (Out of 5): </label>
          <input
            type="number"
            name="accountability"
            value={scores.accountability}
            onChange={handleInputChange}
            placeholder="Enter score"
            max="5"
            min="0"
            className="mentor-input"
          />
        </div>

        <div>
          <label>Attendance (Out of 5): </label>
          <input
            type="number"
            name="attendance"
            value={scores.attendance}
            onChange={handleInputChange}
            placeholder="Enter score"
            max="5"
            min="0"
            className="mentor-input"
          />
        </div>

        <div>
          <label>Project Delivery (Out of 5): </label>
          <input
            type="number"
            name="projectDelivery"
            value={scores.projectDelivery}
            onChange={handleInputChange}
            placeholder="Enter score"
            max="5"
            min="0"
            className="mentor-input"
          />
        </div>

        <div>
          <label>Technical (Out of 5): </label>
          <input
            type="number"
            name="technical"
            value={scores.technical}
            onChange={handleInputChange}
            placeholder="Enter score"
            max="5"
            min="0"
            className="mentor-input"
          />
        </div>

        <button type="button" className="mentor-btn-score" onClick={handleSubmit}>
          Save Scores
        </button>
      </form>
    </div>
  );
}

export default MentorScorecard;
