import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tasks.css';
import Sidebar from './Sidebar';

function Tasks() {
  const navigate = useNavigate();

  // Hardcoded quizzes and projects
  const quizzes = [
    {
      quizTitle: 'React Basics',
      quizDate: '2025-03-20',
      time: '30 minutes',
    },
    {
      quizTitle: 'JavaScript Fundamentals',
      quizDate: '2025-03-25',
      time: '45 minutes',
    },
  ];

  const projects = [
    {
      projectTitle: 'Build a Portfolio',
      projectDeadline: '2025-04-10',
    },
    {
      projectTitle: 'Create a Chat App',
      projectDeadline: '2025-04-15',
    },
  ];

  const handleQuizAccess = (quizDate) => {
    const currentDate = new Date();
    if (new Date(quizDate) <= currentDate) {
      navigate('/quiz'); // Navigate to quiz page
    } else {
      alert('The quiz is not available yet!');
    }
  };

  const handleViewProject = () => {
    navigate('/project-details'); // Navigate to detailed project page
  };

  return (
    <div className="tasks-container">
      <Sidebar />

      <div className="task-cards">
        {/* Hardcoded Quiz Cards */}
        {quizzes.length > 0 ? (
          quizzes.map((quiz, index) => (
            <div key={index} className="card quiz-card">
              <h2>{`Quiz: ${quiz.quizTitle}`}</h2>
              <p>Date: {quiz.quizDate}</p>
              <p>Time: {quiz.time}</p>
              <button
                className="access-btn"
                onClick={() => handleQuizAccess(quiz.quizDate)}
                disabled={new Date(quiz.quizDate) > new Date()}
              >
                Access Quiz
              </button>
            </div>
          ))
        ) : (
          <p>No quizzes available at the moment.</p>
        )}

        {/* Hardcoded Project Cards */}
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <div key={index} className="card project-card">
              <h2>{`Project: ${project.projectTitle}`}</h2>
              <p>Deadline: {project.projectDeadline}</p>
              <button className="access-btn" onClick={handleViewProject}>
                View Project
              </button>
            </div>
          ))
        ) : (
          <p>No projects available at the moment.</p>
        )}
      </div>
    </div>
  );
}

export default Tasks;
