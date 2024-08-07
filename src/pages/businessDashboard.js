// pages/BusinessDashboard.js
import React from 'react';
import Sidebar from '../components/sidebar';
import StatsCards from '../components/statsCards';
import RevenueChart from '../components/revenueChart';
import RedemptionChart from '../components/redemptionChart';
import RecentRedemptions from '../components/recentRedemptions';

function BusinessDashboard() {
  return (
    <div className="kmint container-fluid">
      <div className="row">
        <Sidebar />
        <main className="kmint col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Business Dashboard</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                This week
              </button>
            </div>
          </div>
          <StatsCards />
          <div className="row mt-4">
            <div className="col-md-6">
              <RevenueChart />
            </div>
            <div className="col-md-6">
              <RedemptionChart />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <RecentRedemptions />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default BusinessDashboard;