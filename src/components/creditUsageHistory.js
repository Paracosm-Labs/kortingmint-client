// components/CreditUsageHistory.js
import React from 'react';

function CreditUsageHistory() {
  // Sample data - replace with actual data fetching logic
  const usageHistory = [
    { id: 1, date: '2023-05-20', amount: 5000, purpose: 'Inventory Purchase', status: 'Approved' },
    { id: 2, date: '2023-04-15', amount: 10000, purpose: 'Equipment Purchase', status: 'Repaid' },
  ];

  const repaymentSchedule = [
    { date: 'June 30, 2023', amount: 2500 },
    { date: 'July 31, 2023', amount: 2500 },
    { date: 'August 31, 2023', amount: 2500 },
  ];

  return (
    <div className="row">
      <div className="col-md-8">
        <h3>Credit Usage History</h3>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Purpose</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {usageHistory.map((item) => (
                <tr key={item.id}>
                  <td>{item.date}</td>
                  <td>${item.amount.toLocaleString()}</td>
                  <td>{item.purpose}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-md-4">
        <h3>Repayment Schedule</h3>
        <ul className="list-group">
          {repaymentSchedule.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {item.date}
              <span className="badge bg-primary rounded-pill">${item.amount.toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CreditUsageHistory;