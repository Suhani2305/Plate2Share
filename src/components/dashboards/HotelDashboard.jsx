import React from 'react';
import './Dashboard.css';

const HotelDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Hotel Dashboard</h1>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Total Food Donated</h3>
          <p className="stat">0 kg</p>
        </div>
        <div className="dashboard-card">
          <h3>Active Donations</h3>
          <p className="stat">0</p>
        </div>
        <div className="dashboard-card">
          <h3>Connected NGOs</h3>
          <p className="stat">0</p>
        </div>
        <div className="dashboard-card">
          <h3>Donation Schedule</h3>
          <p className="stat">0</p>
        </div>
      </div>
      <div className="dashboard-actions">
        <button className="action-button">Schedule Donation</button>
        <button className="action-button">Manage Inventory</button>
        <button className="action-button">View Analytics</button>
      </div>
    </div>
  );
};

export default HotelDashboard; 