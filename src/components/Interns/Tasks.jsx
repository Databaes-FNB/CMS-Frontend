
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // React Router for navigation
// import './Tasks.css';
// import Sidebar from './Sidebar';

// function Tasks() {
//   const [quizAvailable, setQuizAvailable] = useState(false);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [projectLink, setProjectLink] = useState('');
//   const [quizDate, setQuizDate] = useState(new Date('2025-03-15T10:00:00'));
//   const navigate = useNavigate(); // React Router hook to navigate to other pages

//   // Check if the quiz is available based on the current date and time
//   useEffect(() => {
//     const currentDate = new Date();
//     setQuizAvailable(currentDate >= quizDate);
//   }, [quizDate]);

//   // Handle quiz access (only allow if the quiz date/time is met)
//   const handleQuizAccess = () => {
//     if (quizAvailable) {
//       navigate('/quiz'); // Navigate to quiz page
//     } else {
//       alert('The quiz is not available yet!');
//     }
//   };

//   // Open project details modal
//   const openProjectModal = () => {
//     setModalVisible(true);
//   };

//   // Close project details modal
//   const closeModal = () => {
//     setModalVisible(false);
//   };

//   // Handle project link submission
//   const handleProjectSubmit = () => {
//     if (projectLink) {
//       alert('Your project has been submitted!');
//       setModalVisible(false);
//     } else {
//       alert('Please provide a valid project link.');
//     }
//   };

//   const handleViewProject = () => {
//     navigate('/project-details'); // Navigate to detailed project page
//   };

//   return (
//     <div className="tasks-container">
//       <Sidebar />
//       <h1>Test Quizzes and Projects</h1>

//       <div className="task-cards">
//         {/* Quiz Cards */}
//         <div className="card quiz-card">
//           <h2>Quiz: HTML, JavaScript & CSS</h2>
//           <p>Date: March 15, 2025</p>
//           <p>Time: 10:00 AM</p>
//           <p>Duration: 40 Minutes</p>
//           <button
//             className="access-btn"
//             onClick={handleQuizAccess}
//             disabled={!quizAvailable}
//           >
//             Access Quiz
//           </button>
//         </div>

//         <div className="card quiz-card">
//           <h2>Quiz: Java</h2>
//           <p>Date: March 15, 2025</p>
//           <p>Time: 10:00 AM</p>
//           <p>Duration: 40 Minutes</p>
//           <button
//             className="access-btn"
//             onClick={handleQuizAccess}
//             disabled={!quizAvailable}
//           >
//             Access Quiz
//           </button>
//         </div>

       

//         <div className="card quiz-card">
//           <h2>Quiz: Advanced JavaScript</h2>
//           <p>Date: March 15, 2025</p>
//           <p>Time: 10:00 AM</p>
//           <p>Duration: 40 Minutes</p>
//           <button
//             className="access-btn"
//             onClick={handleQuizAccess}
//             disabled={!quizAvailable}
//           >
//             Access Quiz
//           </button>
//         </div>

//         {/* Project Cards */}
//         <div className="card project-card">
//           <h2>Project: Portfolio Website</h2>
//           <p>Deadline: March 20, 2025</p>
//           <p>Duration: 1 week</p>
//           <button className="access-btn" onClick={handleViewProject}>
//             View Project
//           </button>
//         </div>

//         <div className="card project-card">
//           <h2>Project: To-Do List Application</h2>
//           <p>Deadline: March 20, 2025</p>
//           <p>Duration: 1 week</p>
//           <button className="access-btn" onClick={handleViewProject}>
//             View Project
//           </button>
//         </div>

//         <div className="card project-card">
//           <h2>Project: Movie Information Website</h2>
//           <p>Deadline: March 20, 2025</p>
//           <p>Duration: 1 week</p>
//           <button className="access-btn" onClick={handleViewProject}>
//             View Project
//           </button>
//         </div>
//       </div>

//       {/* Project Modal */}
//       {modalVisible && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close-btn" onClick={closeModal}>
//               &times;
//             </span>
//             <h2>Science Experiment Project</h2>
//             <p>Description: You will be conducting a series of experiments. Submit the report after completion.</p>
//             <p>Deadline: March 20, 2025</p>
//             <label htmlFor="project-link">Submit your work link:</label>
//             <input
//               type="url"
//               id="project-link"
//               placeholder="Enter your project link here"
//               value={projectLink}
//               onChange={(e) => setProjectLink(e.target.value)}
//             />
//             <button onClick={handleProjectSubmit}>Submit</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Tasks;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router for navigation
import './Tasks.css';
import Sidebar from './Sidebar';

function Tasks() {
  const [quizAvailable, setQuizAvailable] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [projectLink, setProjectLink] = useState('');
  const [quizDate, setQuizDate] = useState(new Date('2025-03-15T10:00:00'));
  const navigate = useNavigate(); // React Router hook to navigate to other pages

  // Check if the quiz is available based on the current date and time
  useEffect(() => {
    const currentDate = new Date();
    setQuizAvailable(currentDate >= quizDate);
  }, [quizDate]);

  // Handle quiz access (only allow if the quiz date/time is met)
  const handleQuizAccess = () => {
    if (quizAvailable) {
      navigate('/quiz'); // Navigate to quiz page
    } else {
      alert('The quiz is not available yet!');
    }
  };

  // Open project details modal
  const openProjectModal = () => {
    setModalVisible(true);
  };

  // Close project details modal
  const closeModal = () => {
    setModalVisible(false);
  };

  // Handle project link submission
  const handleProjectSubmit = () => {
    if (projectLink) {
      alert('Your project has been submitted!');
      setModalVisible(false);
    } else {
      alert('Please provide a valid project link.');
    }
  };

  const handleViewProject = () => {
    navigate('/project-details'); // Navigate to detailed project page
  };

  return (
    <div className="tasks-container">
      <Sidebar />
      <h1>Test Quizzes and Projects</h1>

      <div className="task-cards">
        {/* Quiz Cards */}
        <div className="card quiz-card">
          <h2>Quiz: HTML, JavaScript & CSS</h2>
          <p>Date: March 15, 2025</p>
          <p>Time: 10:00 AM</p>
          <p>Duration: 40 Minutes</p>
          <button
            className="access-btn"
            onClick={handleQuizAccess}
            disabled={!quizAvailable}
          >
            Access Quiz
          </button>
        </div>

        <div className="card quiz-card">
          <h2>Quiz: Java</h2>
          <p>Date: March 15, 2025</p>
          <p>Time: 10:00 AM</p>
          <p>Duration: 40 Minutes</p>
          <button
            className="access-btn"
            onClick={handleQuizAccess}
            disabled={!quizAvailable}
          >
            Access Quiz
          </button>
        </div>

        {/* Project Cards */}
        <div className="card project-card">
          <h2>Project: Portfolio Website</h2>
          <p>Deadline: March 20, 2025</p>
          <p>Duration: 1 week</p>
          <button className="access-btn" onClick={handleViewProject}>
            View Project
          </button>
        </div>

        <div className="card project-card">
          <h2>Project: To-Do List Application</h2>
          <p>Deadline: March 20, 2025</p>
          <p>Duration: 1 week</p>
          <button className="access-btn" onClick={handleViewProject}>
            View Project
          </button>
        </div>
      </div>

      {/* Project Modal */}
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <h2>Science Experiment Project</h2>
            <p>Description: You will be conducting a series of experiments. Submit the report after completion.</p>
            <p>Deadline: March 20, 2025</p>
            <label htmlFor="project-link">Submit your work link:</label>
            <input
              type="url"
              id="project-link"
              placeholder="Enter your project link here"
              value={projectLink}
              onChange={(e) => setProjectLink(e.target.value)}
            />
            <button onClick={handleProjectSubmit}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tasks;
