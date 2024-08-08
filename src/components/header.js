import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="kortingmint navbar navbar-expand-lg navbar-light bg-kortingmint">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">KortingMint</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <nav>
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/marketplace">Explore Clubs</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/marketplace/myclubs">My Clubs</Link></li>
            {/* <li className="nav-item"><Link className="nav-link" to="/dashboard/partner">Partner</Link></li> */}
            <li className="nav-item"><Link className="nav-link" to="/dashboard/business">Dashboard</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/">Logout</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;