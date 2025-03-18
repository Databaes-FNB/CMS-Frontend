// import React, { useState } from "react";
// import { Link } from "react-router-dom"; // Link to navigate without refreshing
// import "./MentorSidebar.css"; // Make sure to style it separately

// function MentorSidebar() {
//   const [isVisible, setIsVisible] = useState(true); // State to track whether the sidebar is visible or hidden

//   // Toggle the sidebar visibility
//   const toggleSidebar = () => {
//     setIsVisible((prev) => !prev);
//   };

//   return (
//     <>
//       <div className={`mentor-sidebar ${isVisible ? "visible" : "hidden"}`}>
//         <h2 className="mentor-logo">Mentor Panel</h2>
//         <button className="toggle-btn" onClick={toggleSidebar}>
//           {isVisible ? "Hide Sidebar" : "Show Sidebar"}
//         </button>
//         {isVisible && (
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/mentor/dashboard" className="sidebar-link dashboard-link">
//                   Dashboard
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/mentor/mentor-scorecard" className="sidebar-link mentor-scorecard-link">
//                   Mentor Scorecard
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/mentor/upload-quiz" className="sidebar-link mentor-upload-quiz-link">
//                   Upload Quiz
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/mentor/settings" className="sidebar-link settings-link">
//                   Settings
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         )}
//       </div>

//       {/* The button to show sidebar again when it is hidden */}
//       {!isVisible && (
//         <button className="show-sidebar-btn" onClick={toggleSidebar}>
//           &#8594;
//         </button>
//       )}
//     </>
//   );
// }

// export default MentorSidebar;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MentorSidebar.css"; // Make sure to style it separately

function MentorSidebar() {
  const [isVisible, setIsVisible] = useState(true); // State to track whether the sidebar is visible or hidden

  // Toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className={`mentor-sidebar-container ${isVisible ? 'visible' : 'hidden'}`}>
      {/* Sidebar */}
      <div className={`mentor-sidebar ${isVisible ? "visible" : "hidden"}`}>
        <h2 className="mentor-logo">Mentor Panel</h2>
        {isVisible && (
          <nav>
            <ul>
              <li>
                <Link to="/mentor/MentorDashboard" className="sidebar-link dashboard-link">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/mentor/mentor-scorecard" className="sidebar-link mentor-scorecard-link">
                  Mentor Scorecard
                </Link>
              </li>
              <li>
                <Link to="/mentor/upload-quiz" className="sidebar-link mentor-upload-quiz-link">
                  Upload Quiz
                </Link>
              </li>
              <li>
                <Link to="/" className="sidebar-link logout-link">
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>

      {/* Button to toggle visibility of the sidebar */}
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isVisible ? "Hide Sidebar" : "Show Sidebar"}
      </button>

      {/* Button to show sidebar again when it is hidden */}
      {!isVisible && (
        <button className="show-sidebar-btn" onClick={toggleSidebar}>
          &#8594; Show Sidebar
        </button>
      )}
    </div>
  );
}

export default MentorSidebar;
