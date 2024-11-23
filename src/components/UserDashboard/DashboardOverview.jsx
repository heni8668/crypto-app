import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

function DashboardOverview() {
  const chartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Investment Growth ($)",
        data: [
          500, 1000, 2000, 3000, 4500, 6000, 7000, 7500, 8000, 9000, 10000,
          12000,
        ],
        borderColor: "#007bff",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        ticks: {
          beginAtZero: true,
          callback: (value) => `$${value}`,
        },
      },
    },
  };

  return (
    <div className="dashboard-overview">
      <h2>Dashboard Overview</h2>

      {/* Stats Section */}
      <div className="stats">
        <div className="stat-card">
          <p>Total Balance</p>
          <h3>$12,000</h3>
        </div>
        <div className="stat-card">
          <p>Active Investments</p>
          <h3>$9,500</h3>
        </div>
        <div className="stat-card">
          <p>Pending Withdrawals</p>
          <h3>$1,500</h3>
        </div>
        <div className="stat-card">
          <p>Total Earnings</p>
          <h3>$15,000</h3>
        </div>
      </div>

      {/* Chart Section */}
      <div className="chart-container">
        <h3>Investment Performance</h3>
        <Line data={chartData} options={chartOptions} />
      </div>

      {/* Insights Section */}
      <div className="insights">
        <div className="insight-card">
          <h4>Top Performing Crypto</h4>
          <p>Bitcoin (BTC)</p>
          <p style={{ color: "green" }}>+12% This Month</p>
        </div>
        <div className="insight-card">
          <h4>Monthly Withdrawals</h4>
          <p>$3,000</p>
          <p>Compared to $2,800 last month</p>
        </div>
        <div className="insight-card">
          <h4>New Investments</h4>
          <p>$4,500</p>
          <p>Compared to $4,000 last month</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardOverview;

/* Add the following CSS styles */
