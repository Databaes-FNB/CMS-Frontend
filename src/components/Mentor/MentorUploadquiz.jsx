import React, { useState } from 'react';

function MentorUploadQuiz({ setQuizzes }) {
  const [quizDate, setQuizDate] = useState('');
  const [languages, setLanguages] = useState('');
  const [time, setTime] = useState('');
  const [quizTitle, setQuizTitle] = useState('');

  const handleUpload = () => {
    const newQuiz = {
      quizTitle,
      quizDate,
      languages,
      time,
    };
    setQuizzes(prevQuizzes => [...prevQuizzes, newQuiz]);
    // Reset form
    setQuizDate('');
    setLanguages('');
    setTime('');
    setQuizTitle('');
  };

  return (
    <div>
      <h2>Upload Quiz</h2>
      <input 
        type="text" 
        placeholder="Quiz Title" 
        value={quizTitle}
        onChange={(e) => setQuizTitle(e.target.value)}
      />
      <input 
        type="date" 
        value={quizDate}
        onChange={(e) => setQuizDate(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="Languages (comma-separated)"
        value={languages}
        onChange={(e) => setLanguages(e.target.value)}
      />
      <input 
        type="time" 
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button onClick={handleUpload}>Upload Quiz</button>
    </div>
  );
}

export default MentorUploadQuiz;
