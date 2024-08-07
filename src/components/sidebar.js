// components/sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="col-md-3 col-lg-2 d-md-block bg-light kortingmint sidebar">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/dashboard/business" className="nav-link active">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/business/coupons" className="nav-link">Coupons</Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/business/redemptions" className="nav-link">Redemptions</Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/business/credit" className="nav-link">Credit</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;