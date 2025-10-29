// header.jsx
import React from 'react';
import '../../styles/components/layout/header.css';

const Header = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <header className="page-header">
      <div className="header-left">
        <button 
          className="mobile-menu-toggle"
          onClick={toggleSidebar}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        
        {/* Logo */}
        <div className="logo-container">
          <svg className="logo-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2L20 8L26 10L24 16L26 22L20 24L16 30L12 24L6 22L8 16L6 10L12 8L16 2Z" fill="#f04f04"/>
            <circle cx="16" cy="16" r="4" fill="white"/>
            <path d="M16 12V20M12 16H20" stroke="white" strokeWidth="2"/>
          </svg>
          <img src="/src/assets/logo.svg" alt="Company Logo" class="company-logo"></img>
        </div>
      </div>
      
      <div className="header-actions">
        {/* Notifications */}
        <button className="header-action-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
        </button>
        
        {/* User Profile */}
        <div className="user-profile">
          <div className="user-avatar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;