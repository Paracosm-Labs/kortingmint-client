// pages/OfferManagement.js
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/sidebar';
import OfferTable from '../components/offerTable';
import OfferModal from '../components/offerModal';

function OfferManagement() {
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);

  const handleNewOffer = () => {
    setSelectedOffer(null);
    setShowOfferModal(true);
  };

  const handleEditOffer = (offer) => {
    setSelectedOffer(offer);
    setShowOfferModal(true);
  };

  const handleDeleteOffer = (offerId) => {
    // Implement delete logic here
    console.log('Deleting offer:', offerId);
  };

  return (
    <div className="kmint container-fluid">
      <div className="row">
        <Sidebar />
        <main className="kmint col-md-6 ms-sm-auto col-lg-6 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Offer Management</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <button type="button" className="btn btn-md btn-outline-secondary me-2">
                Export CSV
              </button>
              <button type="button" className="btn btn-md btn-kmint-blue" onClick={handleNewOffer}>
                New Offer
              </button>
            </div>
          </div>
          <OfferTable onEdit={handleEditOffer} onDelete={handleDeleteOffer} />
          <OfferModal show={showOfferModal} onHide={() => setShowOfferModal(false)} offer={selectedOffer} />
        </main>
        <div className='col-md-3'></div>
      </div>
    </div>
  );
}

export default OfferManagement;
