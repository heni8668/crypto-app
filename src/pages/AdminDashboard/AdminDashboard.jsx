import React, { useState, useEffect } from "react";
import ApexCharts from "react-apexcharts";
import {
  IconBell,
  IconCurrency,
  IconCurrencyKip,
  IconDashboard,
  IconFileOff,
  IconFilesOff,
  IconMail,
  IconMenu,
  IconReportAnalytics,
  IconSearch,
  IconSettings,
  IconShoppingBag,
  IconSteeringWheel,
  IconTransactionBitcoin,
  IconTransactionDollar,
  IconTriangles,
  IconUser,
  IconUsers,
  IconX,
  
} from "@tabler/icons-react";
import '../../styles/dashboard.css'
import { Outlet, Link } from "react-router-dom";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // BAR CHART DATA
  const barChartOptions = {
    series: [
      {
        data: [10, 8, 6, 4, 2],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
      toolbar: { show: false },
    },
    colors: ["#246dec", "#cc3c43", "#367952", "#f5b74f", "#4f35a1"],
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        horizontal: false,
        columnWidth: "40%",
      },
    },
    dataLabels: { enabled: false },
    legend: { show: false },
    xaxis: {
      categories: ["Laptop", "Phone", "Monitor", "Headphones", "Camera"],
    },
    yaxis: {
      title: {
        text: "Count",
      },
    },
  };

  // AREA CHART DATA
  const areaChartOptions = {
    series: [
      {
        name: "Purchase Orders",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Sales Orders",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    chart: {
      height: 350,
      type: "area",
      toolbar: { show: false },
    },
    colors: ["#4f35a1", "#246dec"],
    dataLabels: { enabled: false },
    stroke: { curve: "smooth" },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    markers: { size: 0 },
    yaxis: [
      {
        title: {
          text: "Purchase Orders",
        },
      },
      {
        opposite: true,
        title: {
          text: "Sales Orders",
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
    },
  };

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="grid-container">
      {/* Header */}
      <header className="header">
        <div className="menu-icon" onClick={toggleSidebar}>
          <span className="material-icons-outlined">
            <IconMenu />
          </span>
        </div>
        <div className="header-left">
          <span className="material-icons-outlined">
            <IconSearch />
          </span>
        </div>
        <div className="header-right">
          <span className="material-icons-outlined">
            <IconBell />
          </span>
          <span className="material-icons-outlined">
            <IconMail />
          </span>
          <span className="material-icons-outlined">
            <IconUser />
          </span>
        </div>
      </header>

      {/* Sidebar */}
      <aside id="sidebar" className={sidebarOpen ? "sidebar-responsive" : ""}>
        <div className="sidebar-title">
          <div className="sidebar-brand">
            <span className="material-icons-outlined">
              <IconTriangles />
            </span>{" "}
            Crypto
          </div>
          <span className="material-icons-outlined" onClick={toggleSidebar}>
            <IconMenu />
          </span>
        </div>

        <ul className="sidebar-list">
          <Link to={'/admin'}>
            <li className="sidebar-list-item">
              
                <span className="material-icons-outlined">
                  <IconDashboard />
                </span>{" "}
                Dashboard
              
            </li>
          </Link>
          <Link to={"/admin/users"}>
            <li className="sidebar-list-item">
              <span className="material-icons-outlined">
                <IconUsers />
              </span>{" "}
              Users
            </li>
          </Link>
          <Link to={"/admin/transactions"}>
            <li className="sidebar-list-item">
              <span className="material-icons-outlined">
                <IconCurrency />
              </span>{" "}
              Transactions
            </li>
          </Link>
          <Link to={""}>
            <li className="sidebar-list-item">
              <span className="material-icons-outlined">
                <IconTransactionBitcoin />
              </span>{" "}
              Crypto
            </li>
          </Link>

          <Link>
            <li className="sidebar-list-item">
              <span className="material-icons-outlined">
                <IconReportAnalytics />
              </span>{" "}
              Reports
            </li>
          </Link>
          <Link>
            <li className="sidebar-list-item">
              <span className="material-icons-outlined">
                <IconSettings />
              </span>{" "}
              Settings
            </li>
          </Link>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-container">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
