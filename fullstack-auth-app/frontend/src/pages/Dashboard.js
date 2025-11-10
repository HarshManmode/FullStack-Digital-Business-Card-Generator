import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./Dashboard.css";

const Dashboard = () => {
  const userEmail = localStorage.getItem("userEmail") || "user@example.com";
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <h1>Welcome back 👋</h1>
      </div>

      {/* User Info */}
      <div className="dashboard-card">
        <div className="user-info">
          <FaUserCircle className="user-icon" />
          <div>
            <h2>{userEmail}</h2>
            <p>Your personalized dashboard</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          {/* ✅ Create Business Card redirects to /card */}
          <div
            className="stat-card clickable"
            onClick={() => navigate("/card")}
            style={{ cursor: "pointer" }}
          >
            <h3>💳 Create Business Card</h3>
            <p>Click to start designing your card</p>
          </div>

          <div className="stat-card">
            <h3>🕒 Last Login</h3>
            <p>{new Date().toLocaleDateString()}</p>
          </div>

          <div className="stat-card">
            <h3>⭐ Account Status</h3>
            <p>Active</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
