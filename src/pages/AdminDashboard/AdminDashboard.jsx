import React from "react";
import AdminOverview from "../../components/AdminDashboard/AdminOverview";
import UserManagement from "../../components/AdminDashboard/UserManagement";
import TransactionManagement from "../../components/AdminDashboard/TransactionManagement";
import CryptoManagement from "../../components/AdminDashboard/CryptoManagement";
import ReportsAnalytics from "../../components/AdminDashboard/ReportsAnalytics";

function AdminDashboard() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <ul>
          <li>Overview</li>
          <li>Users</li>
          <li>Transactions</li>
          <li>Cryptos</li>
          <li>Reports</li>
        </ul>
      </aside>
      <main className="dashboard-main">
        {/* Use React Router to manage navigation */}
        <AdminOverview />
      </main>
    </div>
  );
}

export default AdminDashboard;
