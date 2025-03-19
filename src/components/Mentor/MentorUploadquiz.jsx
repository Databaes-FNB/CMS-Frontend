// import React, { useState } from 'react';
// import MentorSidebar from './MentorSidebar';

// function MentorUploadquiz() {
//   // State variables to hold the input values
//   const [quizTitle, setQuizTitle] = useState('');
//   const [quizDate, setQuizDate] = useState('');
//   const [quizTime, setQuizTime] = useState('');
//   const [projectTitle, setProjectTitle] = useState('');
//   const [projectDeadline, setProjectDeadline] = useState('');
//   const [projectDescription, setProjectDescription] = useState('');

//   // Handle quiz form submission (hardcoded)
//   const handleQuizUpload = () => {
//     console.log('Quiz Uploaded:', { quizTitle, quizDate, quizTime });
//     // Reset the form after upload
//     setQuizTitle('');
//     setQuizDate('');
//     setQuizTime('');
//   };

//   // Handle project form submission (hardcoded)
//   const handleProjectUpload = () => {
//     console.log('Project Uploaded:', { projectTitle, projectDeadline, projectDescription });
//     // Reset the form after upload
//     setProjectTitle('');
//     setProjectDeadline('');
//     setProjectDescription('');
//   };

//   return (
//     <div className="mentor-upload-container">
//             <MentorSidebar />
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
//         type="time"
//         value={quizTime}
//         onChange={(e) => setQuizTime(e.target.value)}
//       />
//       <button onClick={handleQuizUpload}>Upload Quiz</button>

//       <h2>Upload Project</h2>
//       <input
//         type="text"
//         placeholder="Project Title"
//         value={projectTitle}
//         onChange={(e) => setProjectTitle(e.target.value)}
//       />
//       <input
//         type="date"
//         value={projectDeadline}
//         onChange={(e) => setProjectDeadline(e.target.value)}
//       />
//       <textarea
//         placeholder="Project Description"
//         value={projectDescription}
//         onChange={(e) => setProjectDescription(e.target.value)}
//       />
//       <button onClick={handleProjectUpload}>Upload Project</button>
//     </div>
//   );
// }

// export default MentorUploadquiz;


import React, { useState } from 'react';
import MentorSidebar from './MentorSidebar'; // Assuming you have a sidebar component
import './MentorUploadquiz.css'

function MentorUploadquiz() {
  // State variables to hold the input values
  const [quizTitle, setQuizTitle] = useState('');
  const [quizDate, setQuizDate] = useState('');
  const [quizTime, setQuizTime] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDeadline, setProjectDeadline] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  // Handle quiz form submission (hardcoded)
  const handleQuizUpload = () => {
    console.log('Quiz Uploaded:', { quizTitle, quizDate, quizTime });
    // Reset the form after upload
    setQuizTitle('');
    setQuizDate('');
    setQuizTime('');
  };

  // Handle project form submission (hardcoded)
  const handleProjectUpload = () => {
    console.log('Project Uploaded:', { projectTitle, projectDeadline, projectDescription });
    // Reset the form after upload
    setProjectTitle('');
    setProjectDeadline('');
    setProjectDescription('');
  };

  return (
    <div className="mentor-upload-container">
      <MentorSidebar /> {/* Assuming MentorSidebar component is included */}
      
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
        type="time"
        value={quizTime}
        onChange={(e) => setQuizTime(e.target.value)}
      />
      <button onClick={handleQuizUpload}>Upload Quiz</button>

      <h2>Upload Project</h2>
      <input
        type="text"
        placeholder="Project Title"
        value={projectTitle}
        onChange={(e) => setProjectTitle(e.target.value)}
      />
      <input
        type="date"
        value={projectDeadline}
        onChange={(e) => setProjectDeadline(e.target.value)}
      />
      <textarea
        placeholder="Project Description"
        value={projectDescription}
        onChange={(e) => setProjectDescription(e.target.value)}
      />
      <button onClick={handleProjectUpload}>Upload Project</button>
    </div>
  );
}

export default MentorUploadquiz;
