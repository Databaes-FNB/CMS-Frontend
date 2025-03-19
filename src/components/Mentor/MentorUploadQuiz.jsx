import React, { useState } from 'react';
import './MentorUploadQuiz.css';
import MentorSidebar from './MentorSidebar';

function MentorUploadQuiz() {
  const [quizTitle, setQuizTitle] = useState('');
  const [quizDate, setQuizDate] = useState(''); // This holds the quiz date and time
  const [languages, setLanguages] = useState('');
  const [time, setTime] = useState('');
  const [quizDeadline, setQuizDeadline] = useState(''); // New state for quiz deadline
  const [errorMessage, setErrorMessage] = useState('');
  const [quizzes, setQuizzes] = useState([]); // State to store the list of quizzes

  const handleUpload = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validate if all fields are filled
    if (!quizTitle || !quizDate || !languages || !time || !quizDeadline) {
      setErrorMessage('Please fill in all fields before uploading the quiz.');
      return;
    }

    const newQuiz = {
      quizTitle,
      quizDate,
      languages,
      time,
      quizDeadline, // Add quiz deadline to the new quiz
    };

    // Add new quiz to the quizzes list
    setQuizzes((prevQuizzes) => [...prevQuizzes, newQuiz]);

    // Reset form fields after successful upload
    setQuizTitle('');
    setQuizDate('');
    setLanguages('');
    setTime('');
    setQuizDeadline('');
    setErrorMessage('');
  };

  return (
    <div className="mentor-upload-quiz-container">
      <MentorSidebar />
      <h2>Upload Quiz</h2>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <form onSubmit={handleUpload}>
        <div className="form-group">
          <label htmlFor="quizTitle">Quiz Title</label>
          <input
            id="quizTitle"
            type="text"
            placeholder="Enter quiz title"
            value={quizTitle}
            onChange={(e) => setQuizTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="quizDate">Quiz Date and Time</label>
          <input
            id="quizDate"
            type="datetime-local" // Changed from date to datetime-local
            value={quizDate}
            onChange={(e) => setQuizDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="languages">Languages (comma-separated)</label>
          <input
            id="languages"
            type="text"
            placeholder="Enter languages"
            value={languages}
            onChange={(e) => setLanguages(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Quiz Duration</label>
          <input
            id="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        {/* New field for quiz deadline */}
        <div className="form-group">
          <label htmlFor="quizDeadline">Quiz Deadline Date and Time</label>
          <input
            id="quizDeadline"
            type="datetime-local" // Date and time input for the deadline
            value={quizDeadline}
            onChange={(e) => setQuizDeadline(e.target.value)}
            required
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="upload-button">
          Upload Quiz
        </button>
      </form>

      {/* Display the list of quizzes */}
      <div className="quizzes-list">
        <h3>Uploaded Quizzes</h3>
        {quizzes.length > 0 ? (
          <ul>
            {quizzes.map((quiz, index) => (
              <li key={index}>
                <strong>{quiz.quizTitle}</strong><br />
                Date and Time: {quiz.quizDate}<br />
                Deadline: {quiz.quizDeadline}<br />
                Languages: {quiz.languages}<br />
                Duration: {quiz.time} hours
              </li>
            ))}
          </ul>
        ) : (
          <p>No quizzes uploaded yet.</p>
        )}
      </div>
    </div>
  );
}

export default MentorUploadQuiz;
