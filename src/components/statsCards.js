// components/statsCards.js
import React from 'react';

const statsData = [
  { title: "Total Redemptions", value: "1,234" },
  { title: "Revenue Generated", value: "$15,678" },
  { title: "Credit Available", value: "$2,500" },
  { title: "Interest Rate", value: "5.25%" }
];

function StatsCards() {
  return (
    <div className="row">
      {statsData.map((stat, index) => (
        <div key={index} className="col-md-3">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{stat.title}</h5>
              <p className="card-text fs-4">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;