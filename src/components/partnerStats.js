// components/PartnerStats.js
import React from 'react';

const statsData = [
  { title: "Total Referrals", value: "1,234" },
  { title: "Commissions Generated", value: "$8,888" },
];

function PartnerStats() {
  return (
    <div className="row">
      {statsData.map((stat, index) => (
        <div key={index} className="col-md-5">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{stat.title}</h5>
              <p className="card-text fs-4">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
      <div className='col-md-2'>
      <button type="button" className="btn btn-success mt-4"><i className='fa fa-award'></i> Claim</button>
      </div>
    </div>
  );
}

export default PartnerStats;