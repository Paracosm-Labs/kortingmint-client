// components/recentCommissions.js
import React from 'react';

const recentCommissionsData = [
  { date: '2023-05-15', customer: 'Tx...8oPx', amount: '$5.00', type: 'Club' },
  { date: '2023-05-14', customer: 'Tx...8oPx', amount: '$5.00', type: 'Club' },
  { date: '2023-05-13', customer: 'Tx...8oon', amount: '$0.30', type: 'Mint' },
];

function RecentCommissions() {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Recent Commissions</h5>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {recentCommissionsData.map((commission, index) => (
                <tr key={index}>
                  <td>{commission.date}</td>
                  <td>{commission.customer}</td>
                  <td>{commission.amount}</td>
                  <td>
                    <span className={`badge bg-${commission.type === 'Club' ? 'success' : 'info'}`}>
                      {commission.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RecentCommissions;