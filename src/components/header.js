import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="kortingmint navbar navbar-expand-lg navbar-light bg-kortingmint">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">KortingMint</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <nav>
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/dashboard/partner">Partner</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/dashboard/business">Business</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/marketplace">Explore Coupons</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/marketplace/mycoupons">My Coupons</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;