import React from 'react';
import MentorSidebar from './MentorSidebar';

function MentorInterns() {
  // Hardcoded list of interns
  const interns = [
    { id: 1, name: 'Desree Madiba', email: 'desree.madiba@gmail.com' },
    { id: 2, name: 'Tumisang Matona', email: 'tumisang.matona@gmail.com' },
    { id: 3, name: 'Nkosinathi Sibiya', email: 'nkosinathi.sibiya@gmail.com' },
    { id: 4, name: 'Mduduzi Nyathi', email: 'mduduzi.nyathi@gmail.com' },
  ];

  return (
    <div>
      <MentorSidebar />
      <h1>Your Interns</h1>
      <p>list of interns assigned to you.</p>

      <div className="intern-list">
        <h2>Assigned Interns:</h2>
        <ul>
          {interns.map((intern) => (
            <li key={intern.id} className="intern-item">
              <h3>{intern.name}</h3>
              <p>Email: {intern.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MentorInterns;
