// pages/DealManagement.js
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/sidebar';
import DealTable from '../components/dealTable';
import DealModal from '../components/dealModal';

function DealManagement() {
  const [showDealModal, setShowDealModal] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState(null);

  const handleNewDeal = () => {
    setSelectedDeal(null);
    setShowDealModal(true);
  };

  const handleEditDeal = (offer) => {
    setSelectedDeal(offer);
    setShowDealModal(true);
  };

  const handleDeleteDeal = (offerId) => {
    // Implement delete logic here
    console.log('Deleting offer:', offerId);
  };

  return (
    <div className="kmint container-fluid">
      <div className="row">
        <Sidebar />
        <main className="kmint col-md-6 ms-sm-auto col-lg-6 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Deal Management</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <button type="button" className="btn btn-md btn-outline-secondary me-2">
                Export CSV
              </button>
              <button type="button" className="btn btn-md btn-kmint-blue" onClick={handleNewDeal}>
                New Deal
              </button>
            </div>
          </div>
          <DealTable onEdit={handleEditDeal} onDelete={handleDeleteDeal} />
          <DealModal show={showDealModal} onHide={() => setShowDealModal(false)} offer={selectedDeal} />
        </main>
        <div className='col-md-3'></div>
      </div>
    </div>
  );
}

export default DealManagement;
