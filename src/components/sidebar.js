// components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="col-md-3 col-lg-2 d-md-block bg-light kortingmint sidebar">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
            <li className="nav-item">
                <Link className="nav-link" to="/dashboard/partner">
                    <i className="fas fa-handshake-angle me-2"></i>
                    Partner Dashboard
                </Link>
            </li>
          <li className="nav-item">
            <Link to="/dashboard/club" className="nav-link">
              <i className="fas fa-table-columns me-2"></i>
              Club Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/business/manage-deals" className="nav-link">
              <i className="fas fa-receipt me-2"></i>
              Deal Management
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/business/redemptions" className="nav-link">
              <i className="fas fa-qrcode me-2"></i>
              Redemptions
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/business/credit" className="nav-link">
              <i className="fas fa-credit-card me-2"></i>
              Access Credit
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;