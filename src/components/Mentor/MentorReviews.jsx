import React, { useState } from 'react';
import MentorSidebar from './MentorSidebar';
import './MentorReviews.css';


function MentorReviews() {
  // Example list of interns
  const interns = [
    { id: 1, name: 'Desree Madiba', email: 'desree.madiba@gmail.com' },
    { id: 2, name: 'Tumisang Matona', email: 'tumisang.matona@gmail.com' },
  
  ];

  // State to hold the reviews for each intern
  const [reviews, setReviews] = useState(
    interns.reduce((acc, intern) => {
      acc[intern.id] = ''; // Initializing review as empty for each intern
      return acc;
    }, {})
  );

  // Handle changes in the review input fields
  const handleReviewChange = (e, internId) => {
    const { value } = e.target;
    setReviews((prevReviews) => ({
      ...prevReviews,
      [internId]: value,
    }));
  };

  // Handle submission of the review
  const handleSubmitReview = (internId) => {
    // Save the review (here we'll simply log it, but you can save to a database)
    const review = reviews[internId];
    if (review.trim()) {
      alert(`Review for ${internId}: "${review}" has been submitted!`);
    } else {
      alert('Please enter a review before submitting.');
    }
  };

  return (
    <div>
      <MentorSidebar />
      <h1>Intern Reviews</h1>
      <p>Provide feedback and reviews for your interns here.</p>

      <div className="review-list">
        {interns.map((intern) => (
          <div key={intern.id} className="review-item">
            <h3>{intern.name}</h3>
            <p>Email: {intern.email}</p>

            <textarea
              value={reviews[intern.id]}
              onChange={(e) => handleReviewChange(e, intern.id)}
              placeholder="Write your review here"
              rows="5"
              cols="50"
            />

            <button onClick={() => handleSubmitReview(intern.id)}>Submit Review</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MentorReviews;
