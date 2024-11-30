import { IconShoppingBag } from "@tabler/icons-react";
import React from "react";

function AdminOverview() {
  return (
    <>
      <div className="main-title">
        <p className="font-weight-bold">DASHBOARD</p>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <p className="text-primary">Deposit</p>
            <span className="material-icons-outlined text-blue">
              <IconShoppingBag />
            </span>
          </div>
          <span className="text-primary font-weight-bold">$ {' '}249</span>
        </div>

        <div className="card">
          <div className="card-inner">
            <p className="text-primary">Receive</p>
            <span className="material-icons-outlined text-orange">
              <IconShoppingBag />
            </span>
          </div>
          <span className="text-primary font-weight-bold"> $ {' '}83</span>
        </div>

        <div className="card">
          <div className="card-inner">
            <p className="text-primary">Transfer</p>
            <span className="material-icons-outlined text-green">
              <IconShoppingBag />
            </span>
          </div>
          <span className="text-primary font-weight-bold">$ {' '}79</span>
        </div>

        <div className="card">
          <div className="card-inner">
            <p className="text-primary">Total Amount</p>
            <span className="material-icons-outlined text-red">
              <IconShoppingBag />
            </span>
          </div>
          <span className="text-primary font-weight-bold">$ {' '}56876</span>
        </div>
      </div>

      {/*  */}
      {/* <div className="charts">
          <div className="charts-card">
            <p className="chart-title">Top 5 Products</p>
            <ApexCharts
              options={barChartOptions}
              series={barChartOptions.series}
              type="bar"
              height={350}
            />
          </div>

          <div className="charts-card">
            <p className="chart-title">Purchase and Sales Orders</p>
            <ApexCharts
              options={areaChartOptions}
              series={areaChartOptions.series}
              type="area"
              height={350}
            />
          </div>
        </div> */}
    </>
  );
}

export default AdminOverview;
