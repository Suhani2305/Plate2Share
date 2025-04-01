import React from 'react';
import './Dashboard.css';

const IndividualDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Individual Dashboard</h1>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Total Donations Made</h3>
          <p className="stat">0</p>
        </div>
        <div className="dashboard-card">
          <h3>Active Subscriptions</h3>
          <p className="stat">0</p>
        </div>
        <div className="dashboard-card">
          <h3>Saved NGOs</h3>
          <p className="stat">0</p>
        </div>
        <div className="dashboard-card">
          <h3>Donation History</h3>
          <p className="stat">0</p>
        </div>
      </div>
      <div className="dashboard-actions">
        <button className="action-button">Make a Donation</button>
        <button className="action-button">View History</button>
        <button className="action-button">Saved NGOs</button>
      </div>
    </div>
  );
};

export default IndividualDashboard; 