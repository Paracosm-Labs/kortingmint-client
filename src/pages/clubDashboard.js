// pages/BusinessDashboard.js
import React from 'react';
import Sidebar from '../components/sidebar';
import ClubStats from '../components/clubStats';
import RevenueChart from '../components/revenueChart';
import RedemptionChart from '../components/redemptionChart';
import RecentRedemptions from '../components/recentRedemptions';

function BusinessDashboard() {
  return (
    <div className="kmint container-fluid">
      <div className="row">
        <Sidebar />
        <main className="kmint col-md-6 ms-sm-auto col-lg-6 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Club Dashboard</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                This week
              </button>
            </div>
          </div>
          <ClubStats />
          <div className="row mt-4">
            <div className="col-md-12">
              <RedemptionChart />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <RecentRedemptions />
            </div>
          </div>
        </main>
        <div className='col-md-3'></div>
      </div>
    </div>
  );
}

export default BusinessDashboard;