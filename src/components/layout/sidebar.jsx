import { Link } from 'react-router-dom';
import '../../styles/components/layout/sidebar.css';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      {/* Wide Header Section */}
      <div className="sidebar-header">
        <div className="header-content">
          <div className="logo-container">
            <div className="logo-graphic">
              <div className="logo-line line-1"></div>
              <div className="logo-line line-2"></div>
              <div className="logo-line line-3"></div>
            </div>
            <span className="logo-text">CatchACoach</span>
          </div>
          <button 
            className="sidebar-toggle"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? '‹' : '›'}
          </button>
        </div>
      </div>

      {/* Narrow Navigation Section (creates the inverted L) */}
      <div className="sidebar-nav-wrapper">
        <nav className="sidebar-nav">
          <div className="nav-section">
            <Link to="/dashboard" className="nav-item">
              <div className="nav-icon-container">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <span className="nav-label">Home</span>
            </Link>
            
            <Link to="/clients" className="nav-item">
              <div className="nav-icon-container">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <span className="nav-label">Clients</span>
            </Link>
            
            <Link to="/programs" className="nav-item">
              <div className="nav-icon-container">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z"/>
                </svg>
              </div>
              <span className="nav-label">Programs</span>
            </Link>
            
            <Link to="/chat" className="nav-item">
              <div className="nav-icon-container">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <span className="nav-label">Chat</span>
            </Link>
          </div>

          <div className="nav-section bottom-section">
            <Link to="/profile" className="nav-item">
              <div className="nav-icon-container">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <span className="nav-label">Profile</span>
            </Link>
            
            <Link to="/login" className="nav-item">
              <div className="nav-icon-container">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                  <polyline points="16 17 21 12 16 7"/>
                  <line x1="21" y1="12" x2="9" y2="12"/>
                </svg>
              </div>
              <span className="nav-label">Logout</span>
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;