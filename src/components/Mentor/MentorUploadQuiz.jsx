// import React, { useState } from 'react';
// import './MentorUploadQuiz.css';  // Import the CSS file

// function MentorUploadQuiz({ setQuizzes }) {
//   const [quizDate, setQuizDate] = useState('');
//   const [languages, setLanguages] = useState('');
//   const [time, setTime] = useState('');
//   const [quizTitle, setQuizTitle] = useState('');

//   const handleUpload = () => {
//     // Check if all fields are filled
//     if (!quizTitle || !quizDate || !languages || !time) {
//       alert('Please fill in all fields before uploading the quiz.');
//       return;
//     }

//     const newQuiz = {
//       quizTitle,
//       quizDate,
//       languages,
//       time,
//     };

//     // Update quizzes in the parent component using setQuizzes
//     setQuizzes((prevQuizzes) => [...prevQuizzes, newQuiz]);

//     // Reset form fields after successful upload
//     setQuizDate('');
//     setLanguages('');
//     setTime('');
//     setQuizTitle('');
//   };

//   return (
//     <div className="mentor-upload-quiz-container">
//       <h2>Upload Quiz</h2>

//       <input
//         type="text"
//         placeholder="Quiz Title"
//         value={quizTitle}
//         onChange={(e) => setQuizTitle(e.target.value)}
//       />

//       <input
//         type="date"
//         value={quizDate}
//         onChange={(e) => setQuizDate(e.target.value)}
//       />

//       <input
//         type="text"
//         placeholder="Languages (comma-separated)"
//         value={languages}
//         onChange={(e) => setLanguages(e.target.value)}
//       />

//       <input
//         type="time"
//         value={time}
//         onChange={(e) => setTime(e.target.value)}
//       />

//       <button onClick={handleUpload}>Upload Quiz</button>
//     </div>
//   );
// }

// export default MentorUploadQuiz;

// import React, { useState } from 'react';
// import './MentorUploadQuiz.css';  // Import the CSS file
// import MentorSidebar from './MentorSidebar';

// function MentorUploadQuiz({ setQuizzes }) {
//   // State to hold form inputs
//   const [quizTitle, setQuizTitle] = useState('');
//   const [quizDate, setQuizDate] = useState('');
//   const [languages, setLanguages] = useState('');
//   const [time, setTime] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   // Handle form submission
//   const handleUpload = () => {
//     // Validate if all fields are filled
//     if (!quizTitle || !quizDate || !languages || !time) {
//       setErrorMessage('Please fill in all fields before uploading the quiz.');
//       return;
//     }

//     const newQuiz = {
//       quizTitle,
//       quizDate,
//       languages,
//       time,
//     };

//     // Add new quiz to the quizzes list
//     setQuizzes((prevQuizzes) => [...prevQuizzes, newQuiz]);

//     // Reset form fields after successful upload
//     setQuizTitle('');
//     setQuizDate('');
//     setLanguages('');
//     setTime('');
//     setErrorMessage('');
//   };

//   return (
//     <div className="mentor-upload-quiz-container">
//         <MentorSidebar/>
//       <h2>Upload Quiz</h2>
      
//       {/* Error message display */}
//       {errorMessage && <p className="error-message">{errorMessage}</p>}
      
//       <form onSubmit={(e) => e.preventDefault()}>
//         <div className="form-group">
//           <label htmlFor="quizTitle">Quiz Title</label>
//           <input
//             id="quizTitle"
//             type="text"
//             placeholder="Enter quiz title"
//             value={quizTitle}
//             onChange={(e) => setQuizTitle(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="quizDate">Quiz Date</label>
//           <input
//             id="quizDate"
//             type="date"
//             value={quizDate}
//             onChange={(e) => setQuizDate(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="languages">Languages (comma-separated)</label>
//           <input
//             id="languages"
//             type="text"
//             placeholder="Enter languages"
//             value={languages}
//             onChange={(e) => setLanguages(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="time">Quiz Duration</label>
//           <input
//             id="time"
//             type="time"
//             value={time}
//             onChange={(e) => setTime(e.target.value)}
//             required
//           />
//         </div>

//         <button type="button" onClick={handleUpload} className="upload-button">
//           Upload Quiz
//         </button>
//       </form>
//     </div>
//   );
// }

// export default MentorUploadQuiz;



import React, { useState } from 'react';
import './MentorUploadQuiz.css';
import MentorSidebar from './MentorSidebar';

function MentorUploadQuiz({ setQuizzes }) {
  const [quizTitle, setQuizTitle] = useState('');
  const [quizDate, setQuizDate] = useState('');
  const [languages, setLanguages] = useState('');
  const [time, setTime] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUpload = () => {
    // Validate if all fields are filled
    if (!quizTitle || !quizDate || !languages || !time) {
      setErrorMessage('Please fill in all fields before uploading the quiz.');
      return;
    }

    const newQuiz = {
      quizTitle,
      quizDate,
      languages,
      time,
    };

    // Add new quiz to the quizzes list
    setQuizzes((prevQuizzes) => [...prevQuizzes, newQuiz]);

    // Reset form fields after successful upload
    setQuizTitle('');
    setQuizDate('');
    setLanguages('');
    setTime('');
    setErrorMessage('');
  };

  return (
    <div className="mentor-upload-quiz-container">
      <MentorSidebar />
      <h2>Upload Quiz</h2>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <form onSubmit={(e) => e.preventDefault()}>
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
          <label htmlFor="quizDate">Quiz Date</label>
          <input
            id="quizDate"
            type="date"
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

        <button type="button" onClick={handleUpload} className="upload-button">
          Upload Quiz
        </button>
      </form>
    </div>
  );
}

export default MentorUploadQuiz;
