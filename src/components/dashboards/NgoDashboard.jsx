import React from 'react';
import './Dashboard.css';

const NgoDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>NGO Dashboard</h1>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Total Donations Received</h3>
          <p className="stat">0</p>
        </div>
        <div className="dashboard-card">
          <h3>Active Campaigns</h3>
          <p className="stat">0</p>
        </div>
        <div className="dashboard-card">
          <h3>Total Beneficiaries</h3>
          <p className="stat">0</p>
        </div>
        <div className="dashboard-card">
          <h3>Pending Requests</h3>
          <p className="stat">0</p>
        </div>
      </div>
      <div className="dashboard-actions">
        <button className="action-button">Create Campaign</button>
        <button className="action-button">Manage Donations</button>
        <button className="action-button">View Reports</button>
      </div>
    </div>
  );
};

export default NgoDashboard; 