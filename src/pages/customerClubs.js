import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OffcanvasDeals from '../components/offcanvasDeals';

const purchasedClubs = [
  {
    "id": 1,
    "name": "TechStore Savings Club",
    "description": "Join the TechStore Savings Club to pool your resources with other tech enthusiasts for exclusive group discounts on electronics.",
    "price": 10,
    "category": "Shopping",
    "country": "United States",
    "image": "https://picsum.photos/300/150?random=1",
    "members": 50
},
{
    "id": 2,
    "name": "CoffeeHouse Perks Pool",
    "description": "Become part of the CoffeeHouse Perks Pool to enjoy collective perks like free coffee and group deals at participating coffee shops.",
    "price": 5,
    "category": "Food & Drink",
    "country": "Trinidad and Tobago",
    "image": "https://picsum.photos/300/150?random=2",
    "members": 100
},
{
    "id": 3,
    "name": "FitnessPro Club Discount",
    "description": "Join forces with other fitness enthusiasts in the FitnessPro Club to unlock group discounts on memberships and services.",
    "price": 15,
    "category": "Health",
    "country": "Trinidad and Tobago",
    "image": "https://picsum.photos/300/150?random=3",
    "members": 75
},// Add more purchased Clubs as needed
];



function CustomerClubs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [selectedClub, setSelectedClub] = useState(null);
  
  const handleViewDeals = (club) => {
    setSelectedClub(club);
    setShowOffcanvas(true);
  };


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredClubs = purchasedClubs.filter(club =>
    club.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="kmint container text-center">
      <h2>My Clubs</h2>
      <div className="d-flex justify-content-end mb-4">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <div className="input-group" id="search-bar">
          <input
            type="text"
            className="form-control"
            placeholder="Search Clubs"
            value={searchQuery}
            onChange={handleSearchChange}
            aria-label="Search Clubs"
          />
          <button className="btn btn-outline-secondary" type="button"><i className="fas fa-search"></i></button>
        </div>
        </div>
        <div className="col-md-3"></div>
      </div>

      <div className="row">
        {filteredClubs.map(club => (
          <div className="col-6 mb-4" key={club.id}>
            <div className="card club-card-horizontal">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={club.image} className="img-fluid rounded-start p-3" alt={club.name} />
                </div>
                <div className="col-md-8">
                  <div className="card-body d-flex flex-column text-start">
                    <div>
                      <h5 className="card-title">{club.name}</h5>
                      <p className="card-text">{club.description}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                    <p className="text-muted">{club.members} Members</p>
                      <button className="btn btn-success" onClick={() => handleViewDeals(club)}>View Deals</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        ))}
      </div>
      <OffcanvasDeals show={showOffcanvas} onHide={() => setShowOffcanvas(false)} club={selectedClub} />
    </div>
  );
}

export default CustomerClubs;
