import React from "react";

function AdminOverview() {
  return (
    <div className="admin-overview-container">
      <h2>Admin Overview</h2>
      <div className="stats">
        <div>Total Users: 5,000</div>
        <div>Pending Withdrawals: $20,000</div>
      </div>
    </div>
  );
}

export default AdminOverview;
