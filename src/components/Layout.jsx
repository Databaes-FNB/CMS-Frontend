// import React from 'react';
// import { Outlet } from 'react-router-dom';  // Used to render nested routes
// import Sidebar from './Sidebar';  // Import the Sidebar component
// import './Layout.css'; // Optional, add any styles here

// const Layout = () => {
//   return (
//     <div className="layout">
//       <Sidebar /> {/* Sidebar on the left */}
//       <div className="content">
//         <Outlet /> {/* Renders the content of the current route */}
//       </div>
//     </div>
//   );
// };

// export default Layout;


// import React from "react";
// import { Outlet } from "react-router-dom"; // Used to render nested routes
// import AdminSidebar from './Admin/AdminSidebar'; // Import Admin Sidebar
// import Sidebar from './Interns/Sidebar'; // Import Intern Sidebar (make sure this exists)
// import './Layout.css'; // Optional, add any styles here

// const Layout = ({ userRole }) => {
//   return (
//     <div className="layout">
//       {/* Conditional rendering of Sidebar */}
//       {userRole === "admin" ? <AdminSidebar /> : <Sidebar />}
      
//       <div className="content">
//         <Outlet /> {/* Renders the content of the current route */}
//       </div>
//     </div>
//   );
// };

// export default Layout;


import React from "react";
import { Outlet } from "react-router-dom"; // Used to render nested routes
import AdminSidebar from './Admin/AdminSidebar'; // Admin Sidebar
import Sidebar from './Interns/Sidebar'; // Intern Sidebar
import MentorSidebar from './Mentor/MentorSidebar'; // Mentor Sidebar (newly created)
import './Layout.css'; // Optional, add any styles here

const Layout = ({ userRole }) => {
  return (
    <div className="layout">
      {/* Conditional rendering of Sidebar based on user role */}
      {userRole === "admin" && <AdminSidebar />}
      {userRole === "mentor" && <MentorSidebar />}
      {userRole === "intern" && <Sidebar />}
      
      <div className="content">
        <Outlet /> {/* Renders the content of the current route */}
      </div>
    </div>
  );
};

export default Layout;
