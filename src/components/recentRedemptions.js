// components/recentRedemptions.js
import React from 'react';

const recentRedemptionsData = [
  { date: '2023-05-15', coupon: 'SUMMER20', customer: 'John Doe', amount: '$50.00', status: 'Completed' },
  { date: '2023-05-14', coupon: 'NEWCUST10', customer: 'Jane Smith', amount: '$25.00', status: 'Completed' },
  { date: '2023-05-13', coupon: 'FLASH50', customer: 'Bob Johnson', amount: '$100.00', status: 'Pending' },
];

function RecentRedemptions() {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Recent Redemptions</h5>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Coupon</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentRedemptionsData.map((redemption, index) => (
                <tr key={index}>
                  <td>{redemption.date}</td>
                  <td>{redemption.coupon}</td>
                  <td>{redemption.customer}</td>
                  <td>{redemption.amount}</td>
                  <td>
                    <span className={`badge bg-${redemption.status === 'Completed' ? 'success' : 'warning'}`}>
                      {redemption.status}
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

export default RecentRedemptions;