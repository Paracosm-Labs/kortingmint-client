// pages/partnerDashboard.js
import React from 'react';
import Sidebar from '../components/sidebar';
import PartnerStats from '../components/partnerStats';
import RevenueChart from '../components/revenueChart';
import RecentCommissions from '../components/recentCommissions';

function PartnerDashboard() {
  return (
    <div className="kmint container-fluid">
      <div className="row">
        <Sidebar />
        <main className="kmint col-md-6 ms-sm-auto col-lg-6 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Partner Dashboard</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                This week
              </button>
            </div>
          </div>
          <PartnerStats />
          <div className="row mt-4">
            <div className="col-md-12">
              <RevenueChart />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <RecentCommissions />
            </div>
          </div>
        </main>
        <div className='col-md-3'></div>
      </div>
    </div>
  );
}

export default PartnerDashboard;