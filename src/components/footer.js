import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <p>&copy; 2024 KortingMint. All rights reserved.</p>
        </div>
        <div className="col-md-6 text-md-end">
          <a href="#" className="text-light me-3">Privacy Policy</a>
          <a href="#" className="text-light">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;