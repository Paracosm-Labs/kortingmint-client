// components/newRedemptionModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function NewRedemptionModal({ show, onHide }) {
  const [couponCode, setCouponCode] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitting redemption:', { couponCode, customerName, amount });
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} size="md" centered>
      <Modal.Header closeButton>
        <Modal.Title>New Redemption - Scan QR Code</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div id="qr-reader" className="mb-3">
          {/* QR code reader component would go here */}
          <p>QR Code Reader Placeholder</p>
        </div>
        <div id="qr-reader-results" className="mb-3">
          {/* QR code results would be displayed here */}
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Coupon Code</Form.Label>
            <Form.Control
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Customer Name</Form.Label>
            <Form.Control
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </Form.Group>
          <div className="text-end">
            <Button variant="secondary" onClick={onHide} className="me-2">
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Submit Redemption
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default NewRedemptionModal;