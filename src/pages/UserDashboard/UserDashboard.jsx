import React from "react";
import DashboardOverview from "../../components/UserDashboard/DashboardOverview";
import Investment from "../../components/UserDashboard/Investment";
import DepositWithdrawal from "../../components/UserDashboard/DepositWithdrawal";
import TransactionHistory from "../../components/UserDashboard/TransactionHistory";
import Settings from "../../components/UserDashboard/Settings";
import "../../styles/dashboard.css";
import "../../styles/dashboardOverview.css";

function UserDashboard() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <ul>
          <li>Overview</li>
          <li>Investments</li>
          <li>Deposit/Withdraw</li>
          <li>Transaction History</li>
          <li>Settings</li>
        </ul>
      </aside>
      <main className="dashboard-main">
        {/* Use React Router to manage navigation */}
        <DashboardOverview />
      </main>
    </div>
  );
}

export default UserDashboard;
