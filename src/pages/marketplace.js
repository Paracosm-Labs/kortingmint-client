// pages/Marketplace.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

// Simulated coupon data
const coupons = [
  { id: 1, name: "50% Off TechStore", description: "Get 50% off on all electronics", price: 10, category: "Shopping", country: "United States", image: "https://picsum.photos/300/150?random=1", quantityAvailable: 50 },
  { id: 2, name: "Free Coffee at CoffeeHouse", description: "Enjoy a free coffee with any purchase", price: 5, category: "Food & Drink", country: "Trinidad and Tobago", image: "https://picsum.photos/300/150?random=2", quantityAvailable: 100 },
  { id: 3, name: "20% Off FitnessPro Membership", description: "Join FitnessPro and get 20% off your first month", price: 15, category: "Health", country: "Trinidad and Tobago", image: "https://picsum.photos/300/150?random=3", quantityAvailable: 75 },
  { id: 4, name: "Free Movie Ticket", description: "Get one free movie ticket at CinemaX", price: 7, category: "Entertainment", country: "India", image: "https://picsum.photos/300/150?random=4", quantityAvailable: 30 },
  { id: 5, name: "30% Off TravelPackage", description: "Save 30% on any travel package", price: 25, category: "Travel", country: "Japan", image: "https://picsum.photos/300/150?random=5", quantityAvailable: 20 },
  { id: 6, name: "Buy 1 Get 1 Free at BookStore", description: "Buy one book and get another free", price: 12, category: "Shopping", country: "Germany", image: "https://picsum.photos/300/150?random=6", quantityAvailable: 60 },
  { id: 7, name: "10% Off on All Orders at GourmetBites", description: "Get 10% off on your next order at GourmetBites", price: 8, category: "Food & Drink", country: "France", image: "https://picsum.photos/300/150?random=7", quantityAvailable: 85 },
  { id: 8, name: "Free Yoga Class", description: "Enjoy 1 free yoga class at ZenStudio", price: 10, category: "Health", country: "India", image: "https://picsum.photos/300/150?random=8", quantityAvailable: 40 },
  { id: 9, name: "50% Off Your First Ride with TaxiPro", description: "Get 50% off on your first ride", price: 6, category: "Travel", country: "Netherlands", image: "https://picsum.photos/300/150?random=9", quantityAvailable: 70 },
  
  // Add more coupons as needed
];

function Marketplace() {
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedSort, setSelectedSort] = useState("Newest");
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Extract unique countries and categories from the coupons data
  const uniqueCountries = ["All Countries", ...new Set(coupons.map(coupon => coupon.country))];
  const uniqueCategories = ["All Categories", ...new Set(coupons.map(coupon => coupon.category))];

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

  // Filter coupons based on selected country and category
  const filteredCoupons = coupons.filter(coupon => 
    coupon.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCountry === "All Countries" || coupon.country === selectedCountry) &&
    (selectedCategory === "All Categories" || coupon.category === selectedCategory)
  );

  // Sort coupons based on selected sort option
  const sortedCoupons = [...filteredCoupons].sort((a, b) => {
    switch (selectedSort) {
      case "Price: Low to High":
        return a.price - b.price;
      case "Price: High to Low":
        return b.price - a.price;
      case "Popularity":
        return b.quantityAvailable - a.quantityAvailable;
      case "Newest":
      default:
        return b.id - a.id; // Assuming higher id means newer
    }
  });

  const handleShowModal = (coupon) => {
    setSelectedCoupon(coupon);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCoupon(null);
  };


  return (<>

    <div className="kmint container mt-2">
      <div className="row mb-4">
        <div className="col-md-12 text-center">
          <h1>Discover Amazing Deals</h1>
        </div>
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="d-flex justify-content-middle mt-3">
            <div className="input-group" id="search-bar">
              <input type="text" className="form-control" placeholder="Search coupons" aria-label="Search coupons"
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

      <div className="row" id="coupon-container">
        {sortedCoupons.map(coupon => (
          <div className="col-md-4 mb-4" key={coupon.id}>
            <div className="card coupon-card">
              <img src={coupon.image} className="card-img-top" alt={coupon.name} />
              <div className="card-body">
                <h5 className="card-title">{coupon.name}</h5>
                <p className="card-text">{coupon.description}</p>
                <div className="price-qty-container">
                  <span className="badge bg-secondary badge-category">{coupon.category}</span>
                  <span className="badge bg-secondary badge-country mx-2">{coupon.country}</span>
                  <span className="text-success">{coupon.quantityAvailable} Available</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className='text-success mt-2'>${coupon.price}</h4>
                  <button className="btn btn-primary" onClick={() => handleShowModal(coupon)}>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedCoupon?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedCoupon?.image} className="img-fluid mb-3" alt={selectedCoupon?.name} />
          <h5>${selectedCoupon?.price}</h5>
          <p>{selectedCoupon?.description}</p>
          <p><strong>Category:</strong> {selectedCoupon?.category}</p>
          <p><strong>Country:</strong> {selectedCoupon?.country}</p>
          <p><strong>Quantity Available:</strong> {selectedCoupon?.quantityAvailable}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Buy Now
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
}

export default Marketplace;