import React, { useState } from 'react';

const purchasedCoupons = [
  { id: 1, name: "50% Off TechStore", description: "Get 50% off on all electronics", qty:1, price: 10, image: "https://picsum.photos/300/150?random=1" },
  { id: 2, name: "Free Coffee at CoffeeHouse", description: "Enjoy a free coffee with any purchase", qty:21, price: 5, image: "https://picsum.photos/300/150?random=2" },
  { id: 3, name: "20% Off FitnessPro Membership", description: "Join FitnessPro and get 20% off your first month", qty:10, price: 15, image: "https://picsum.photos/300/150?random=3" },
  // Add more purchased coupons as needed
];

function CustomerCoupons() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCoupons = purchasedCoupons.filter(coupon =>
    coupon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="kmint container mt-2 text-center">
      <h2>My Coupons</h2>
      <div className="d-flex justify-content-end mb-4">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <div className="input-group" id="search-bar">
          <input
            type="text"
            className="form-control"
            placeholder="Search coupons"
            value={searchQuery}
            onChange={handleSearchChange}
            aria-label="Search coupons"
          />
          <button className="btn btn-outline-secondary" type="button"><i className="fas fa-search"></i></button>
        </div>
        </div>
        <div className="col-md-3"></div>
      </div>

      <div className="row">
        {filteredCoupons.map(coupon => (
          <div className="col-6 mb-4" key={coupon.id}>
            <div className="card coupon-card-horizontal">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={coupon.image} className="img-fluid rounded-start p-3" alt={coupon.name} />
                </div>
                <div className="col-md-8">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title">{coupon.name}</h5>
                      <p className="card-text">{coupon.description}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <small><b>{coupon.qty}</b> Left</small>
                      <button className="btn btn-primary">Redeem</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerCoupons;
