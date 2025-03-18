// import React, { useState } from 'react';
// import './MentorScoreCard.css';
// import MentorSidebar from './MentorSidebar';

// function MentorScorecard() {
//   const [scores, setScores] = useState({
//     communication: '',
//     accountability: '',
//     attendance: '',
//     projectDelivery: '',
//     technical: '',
//   });

//   const [internName, setInternName] = useState('');
  
//   const handleInputChange = (e) => {
//     setScores({
//       ...scores,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleNameChange = (e) => {
//     setInternName(e.target.value);
//   };

//   const handleSubmit = () => {
//     // Save scores to localStorage or backend here
//     localStorage.setItem('internName', internName);
//     localStorage.setItem('scores', JSON.stringify(scores));
//     alert('Scores saved!');
//   };

//   return (
//     <div className="mentor-scorecard-container">
//     <MentorSidebar/>
//       <h1>Enter Scores for Intern</h1>
//       <form>
//         <div>
//           <label>Intern Name: </label>
//           <input
//             type="text"
//             name="internName"
//             value={internName}
//             onChange={handleNameChange}
//             placeholder="Enter intern name"
//           />
//         </div>

//         <div>
//           <label>Communication: </label>
//           <input
//             type="number"
//             name="communication"
//             value={scores.communication}
//             onChange={handleInputChange}
//             placeholder="Enter score"
//           />
//         </div>

//         <div>
//           <label>Accountability: </label>
//           <input
//             type="number"
//             name="accountability"
//             value={scores.accountability}
//             onChange={handleInputChange}
//             placeholder="Enter score"
//           />
//         </div>

//         <div>
//           <label>Attendance: </label>
//           <input
//             type="number"
//             name="attendance"
//             value={scores.attendance}
//             onChange={handleInputChange}
//             placeholder="Enter score"
//           />
//         </div>

//         <div>
//           <label>Project Delivery: </label>
//           <input
//             type="number"
//             name="projectDelivery"
//             value={scores.projectDelivery}
//             onChange={handleInputChange}
//             placeholder="Enter score"
//           />
//         </div>

//         <div>
//           <label>Technical: </label>
//           <input
//             type="number"
//             name="technical"
//             value={scores.technical}
//             onChange={handleInputChange}
//             placeholder="Enter score"
//           />
//         </div>

//         <button type="button" onClick={handleSubmit}>Save Scores</button>
//       </form>
//     </div>
//   );
// }

// export default MentorScorecard;


import React, { useState } from 'react';
import './MentorScoreCard.css';
import MentorSidebar from './MentorSidebar';

function MentorScorecard() {
  const [scores, setScores] = useState({
    communication: '',
    accountability: '',
    attendance: '',
    projectDelivery: '',
    technical: '',
  });

  const [internName, setInternName] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setScores({
      ...scores,
      [e.target.name]: e.target.value,
    });
  };

  const handleNameChange = (e) => {
    setInternName(e.target.value);
  };

  const validateScores = () => {
    // Ensure all fields are filled with valid numeric scores
    for (let key in scores) {
      if (!scores[key] || isNaN(scores[key]) || scores[key] < 0 || scores[key] > 100) {
        setError(`Please enter valid scores (0-100) for all fields.`);
        return false;
      }
    }

    if (!internName.trim()) {
      setError('Please enter the intern name.');
      return false;
    }

    setError(''); // Reset error if everything is valid
    return true;
  };

  const handleSubmit = () => {
    if (validateScores()) {
      // Save scores to localStorage or backend here
      localStorage.setItem('internName', internName);
      localStorage.setItem('scores', JSON.stringify(scores));

      alert('Scores saved!');
      // Clear form fields after save
      setInternName('');
      setScores({
        communication: '',
        accountability: '',
        attendance: '',
        projectDelivery: '',
        technical: '',
      });
    }
  };

  return (
    <div className="mentor-scorecard-container">
      <MentorSidebar />
      <div className="scorecard-form-container">
        <h1>Enter Scores for Intern</h1>
        {error && <div className="error-message">{error}</div>}
        <form>
          <div>
            <label>Intern Name: </label>
            <input
              type="text"
              name="internName"
              value={internName}
              onChange={handleNameChange}
              placeholder="Enter intern name"
            />
          </div>

          <div>
            <label>Communication: </label>
            <input
              type="number"
              name="communication"
              value={scores.communication}
              onChange={handleInputChange}
              placeholder="Enter score"
            />
          </div>

          <div>
            <label>Accountability: </label>
            <input
              type="number"
              name="accountability"
              value={scores.accountability}
              onChange={handleInputChange}
              placeholder="Enter score"
            />
          </div>

          <div>
            <label>Attendance: </label>
            <input
              type="number"
              name="attendance"
              value={scores.attendance}
              onChange={handleInputChange}
              placeholder="Enter score"
            />
          </div>

          <div>
            <label>Project Delivery: </label>
            <input
              type="number"
              name="projectDelivery"
              value={scores.projectDelivery}
              onChange={handleInputChange}
              placeholder="Enter score"
            />
          </div>

          <div>
            <label>Technical: </label>
            <input
              type="number"
              name="technical"
              value={scores.technical}
              onChange={handleInputChange}
              placeholder="Enter score"
            />
          </div>

          <button type="button" onClick={handleSubmit}>Save Scores</button>
        </form>
      </div>
    </div>
  );
}

export default MentorScorecard;
