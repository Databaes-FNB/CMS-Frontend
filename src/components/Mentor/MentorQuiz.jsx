import React, { useState } from 'react';
import MentorUploadQuiz from './components/Mentor/MentorUploadQuiz';  // Make sure the import path is correct
import './MentorUploadQuiz.css';  // Import the CSS file

function MentorQuiz() {
  // State to hold quizzes
  const [quizzes, setQuizzes] = useState([]);

  return (
    <div className="mentor-dashboard">
      <h1>Mentor Dashboard</h1>
      
      {/* Pass setQuizzes to the MentorUploadQuiz component */}
      <MentorUploadQuiz setQuizzes={setQuizzes} />

      <h3>Uploaded Quizzes</h3>
      {quizzes.length === 0 ? (
        <p>No quizzes uploaded yet.</p>
      ) : (
        <ul>
          {quizzes.map((quiz, index) => (
            <li key={quiz.quizTitle + index} className="quiz-item">
              <h4>{quiz.quizTitle}</h4>
              <p><strong>Date:</strong> {quiz.quizDate}</p>
              <p><strong>Languages:</strong> {quiz.languages}</p>
              <p><strong>Time:</strong> {quiz.time}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MentorQuiz;
