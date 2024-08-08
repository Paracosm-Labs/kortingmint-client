// pages/exploreClubs.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const clubs = [
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
  },
  {
      "id": 4,
      "name": "CinemaX Movie Club",
      "description": "Become a member of the CinemaX Movie Club to access group discounts on movie tickets and exclusive screenings.",
      "price": 7,
      "category": "Entertainment",
      "country": "India",
      "image": "https://picsum.photos/300/150?random=4",
      "members": 30
  },
  {
      "id": 5,
      "name": "TravelPackage Savings Pool",
      "description": "Join the TravelPackage Savings Pool to team up with fellow travelers and secure group discounts on travel packages.",
      "price": 25,
      "category": "Travel",
      "country": "Japan",
      "image": "https://picsum.photos/300/150?random=5",
      "members": 20
  },
  {
      "id": 6,
      "name": "BookStore Buy 1 Get 1 Pool",
      "description": "Join the BookStore Buy 1 Get 1 Pool to collaborate with other readers for bulk-buy savings and special offers.",
      "price": 12,
      "category": "Shopping",
      "country": "Germany",
      "image": "https://picsum.photos/300/150?random=6",
      "members": 60
  },
  {
      "id": 7,
      "name": "GourmetBites Discount Club",
      "description": "Join the GourmetBites Discount Club to participate in collective savings on gourmet food orders and dining experiences.",
      "price": 8,
      "category": "Food & Drink",
      "country": "France",
      "image": "https://picsum.photos/300/150?random=7",
      "members": 85
  },
  {
      "id": 8,
      "name": "ZenStudio Yoga Pool",
      "description": "Join the ZenStudio Yoga Pool to connect with fellow yoga enthusiasts and benefit from group rates on classes.",
      "price": 10,
      "category": "Health",
      "country": "India",
      "image": "https://picsum.photos/300/150?random=8",
      "members": 40
  },
  {
      "id": 9,
      "name": "TaxiPro Ride Discount Club",
      "description": "Join the TaxiPro Ride Discount Club to enjoy group-negotiated discounts on rides and transport services.",
      "price": 6,
      "category": "Travel",
      "country": "Netherlands",
      "image": "https://picsum.photos/300/150?random=9",
      "members": 70
  }
  // Add more clubs as needed
];


function ExploreClubs() {
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedSort, setSelectedSort] = useState("Newest");
  const [selectedClub, setSelectedClub] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Extract unique countries and categories from the clubs data
  const uniqueCountries = ["All Countries", ...new Set(clubs.map(club => club.country))];
  const uniqueCategories = ["All Categories", ...new Set(clubs.map(club => club.category))];

  // Handle country and category change
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSortSelect = (sort) => {
    setSelectedSort(sort);
  };

  // Filter clubs based on selected country and category
  const filteredClubs = clubs.filter(club => 
    club.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCountry === "All Countries" || club.country === selectedCountry) &&
    (selectedCategory === "All Categories" || club.category === selectedCategory)
  );

  // Sort clubs based on selected sort option
  const sortedClubs = [...filteredClubs].sort((a, b) => {
    switch (selectedSort) {
      case "Price: Low to High":
        return a.price - b.price;
      case "Price: High to Low":
        return b.price - a.price;
      case "Popularity":
        return b.members - a.members;
      case "Newest":
      default:
        return b.id - a.id; // Assuming higher id means newer
    }
  });

  const handleShowModal = (club) => {
    setSelectedClub(club);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedClub(null);
  };

  const handlePayJoin = () => {
    setShowModal(false);
    navigate('/explore/myclubs');
  };


  return (<>

    <div className="kmint container mt-2">
      <div className="row mb-4">
        <div className="col-md-12 text-center">
          <h1>Discover Amazing Clubs</h1>
        </div>
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="d-flex justify-content-middle mt-3">
            <div className="input-group" id="search-bar">
              <input type="text" className="form-control" placeholder="Search Clubs" aria-label="Search Clubs"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button className="btn btn-outline-secondary" type="button"><i className="fas fa-search"></i></button>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group filter-dropdown">
              <button
                type="button"
                className="btn btn-outline-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {selectedCategory}
              </button>
              <ul className="dropdown-menu">
                {uniqueCategories.map(category => (
                  <li key={category}>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => handleCategorySelect(category)}
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="btn-group filter-dropdown">
              <button
                type="button"
                className="btn btn-outline-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {selectedCountry}
              </button>
              <ul className="dropdown-menu">
                {uniqueCountries.map(country => (
                  <li key={country}>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => handleCountrySelect(country)}
                    >
                      {country}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="btn-group filter-dropdown">
              <button
                type="button"
                className="btn btn-outline-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort By: {selectedSort}
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" onClick={() => handleSortSelect("Newest")}>Newest</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => handleSortSelect("Price: Low to High")}>Price: Low to High</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => handleSortSelect("Price: High to Low")}>Price: High to Low</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => handleSortSelect("Popularity")}>Popularity</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row" id="club-container">
        {sortedClubs.map(club => (
          <div className="col-md-4 mb-4" key={club.id}>
            <div className="card club-card">
              <img src={club.image} className="card-img-top" alt={club.name} />
              <div className="card-body">
                <h5 className="card-title">{club.name}</h5>
                <p className="card-text">{club.description}</p>
                <div className="price-qty-container">
                  <span className="badge bg-secondary badge-category">{club.category}</span>
                  <span className="badge bg-secondary badge-country mx-2">{club.country}</span>
                  <span className="text-success">{club.members} Members</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className='text-success mt-2'>${club.price}</h4>
                  <button className="btn btn-success" onClick={() => handleShowModal(club)}>Join Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedClub?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedClub?.image} className="img-fluid mb-3" alt={selectedClub?.name} />
          <h5>${selectedClub?.price}</h5>
          <p>{selectedClub?.description}</p>
          <p><strong>Category:</strong> {selectedClub?.category}</p>
          <p><strong>Country:</strong> {selectedClub?.country}</p>
          <p><strong>Members:</strong> {selectedClub?.members}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="success" onClick={handlePayJoin}>
            Pay & Join Now
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
}

export default ExploreClubs;