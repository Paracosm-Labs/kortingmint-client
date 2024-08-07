// pages/Credit.js
import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import CreditSummary from '../components/creditSummary';
import CreditUsageHistory from '../components/creditUsageHistory';
import MakePaymentModal from '../components/makePaymentModal';
import BorrowModal from '../components/borrowModal';

function Credit() {
  const [showCreditIncreaseModal, setShowCreditIncreaseModal] = useState(false);
  const [showMakePaymentModal, setShowMakePaymentModal] = useState(false);
  const [showBorrowModal, setShowBorrowModal] = useState(false);

  return (
    <div className="kmint container-fluid">
      <div className="row">
        <Sidebar />
        <main className="kmint col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Credit Dashboard</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <button type="button" className="btn btn-sm btn-outline-secondary me-2" onClick={() => setShowMakePaymentModal(true)}>
                Make Payment
              </button>
              <button type="button" className="btn btn-sm btn-primary" onClick={() => setShowBorrowModal(true)}>
                Borrow Now
              </button>
            </div>
          </div>
          <CreditSummary />
          <CreditUsageHistory />
          <MakePaymentModal show={showMakePaymentModal} onHide={() => setShowMakePaymentModal(false)} />
          <BorrowModal show={showBorrowModal} onHide={() => setShowBorrowModal(false)} />
        </main>
      </div>
    </div>
  );
}

export default Credit;