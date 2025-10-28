import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard-content">
      <h1>Welcome to CatchACoach Dashboard</h1>
      <p>This is your main content area. You can put any component here.</p>
      
      <div className="content-grid">
        <div className="content-card">
          <h3>Recent Activity</h3>
          <p>Your recent activities will appear here.</p>
        </div>
        <div className="content-card">
          <h3>Statistics</h3>
          <p>Your performance statistics will appear here.</p>
        </div>
        <div className="content-card">
          <h3>Notifications</h3>
          <p>Important notifications will appear here.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;