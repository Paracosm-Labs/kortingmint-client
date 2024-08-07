// components/CreditSummary.js
import React from 'react';

function CreditSummary() {
  // Sample data - replace with actual data fetching logic
  const creditInfo = {
    limit: 50000,
    available: 35000,
    interestRate: 5.25
  };

  return (
    <div className="row mb-4">
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Credit Limit</h5>
            <p className="card-text display-6">${creditInfo.limit.toLocaleString()}</p>
            <p className="card-text text-muted">Total credit available for your business</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Available Credit</h5>
            <p className="card-text display-6">${creditInfo.available.toLocaleString()}</p>
            <p className="card-text text-muted">Remaining credit available for use</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Current Interest Rate</h5>
            <p className="card-text display-6">{creditInfo.interestRate}%</p>
            <p className="card-text text-muted">Annual percentage rate for borrowing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditSummary;