import React from 'react';
import { Outlet } from 'react-router-dom';  // Used to render nested routes
import Sidebar from './Sidebar';  // Import the Sidebar component
import './Layout.css'; // Optional, add any styles here

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar /> {/* Sidebar on the left */}
      <div className="content">
        <Outlet /> {/* Renders the content of the current route */}
      </div>
    </div>
  );
};

export default Layout;
